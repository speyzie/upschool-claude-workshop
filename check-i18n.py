#!/usr/bin/env python3
"""
Çeviri kontrolü.

index.html içindeki her data-i18n anahtarının script.js'teki tr ve en
sözlüklerinde karşılığı var mı diye bakar. İngilizceye geçtiğinde
Türkçe kalan bir metin olmasın diye.

Kullanım:  python3 check-i18n.py
"""

import re
import sys
from pathlib import Path

HERE = Path(__file__).parent


def html_keys(html):
    keys = set(re.findall(r'data-i18n="([^"]+)"', html))
    for attr in re.findall(r'data-i18n-attr="([^"]+)"', html):
        for pair in attr.split(';'):
            if ':' in pair:
                keys.add(pair.split(':', 1)[1].strip())
    return keys


def dict_keys(js, lang):
    match = re.search(r"\n    %s: \{(.*?)\n    \}" % lang, js, re.S)
    if not match:
        print("HATA: script.js icinde '%s' sozlugu bulunamadi." % lang)
        sys.exit(2)
    return set(re.findall(r"'([^']+)':", match.group(1)))


def report(label, missing):
    if missing:
        print("  [!] %s (%d): %s" % (label, len(missing), ', '.join(sorted(missing))))
        return 1
    print("  [ok] %s" % label)
    return 0


def main():
    html = (HERE / 'index.html').read_text(encoding='utf-8')
    js = (HERE / 'script.js').read_text(encoding='utf-8')

    used = html_keys(html)
    tr = dict_keys(js, 'tr')
    en = dict_keys(js, 'en')

    print("HTML: %d anahtar  |  TR: %d  |  EN: %d\n" % (len(used), len(tr), len(en)))

    problems = 0
    problems += report("HTML'de kullanilan ama TR sozlukte olmayan", used - tr)
    problems += report("HTML'de kullanilan ama EN sozlukte olmayan", used - en)
    problems += report("TR'de var, EN'de yok", tr - en)
    problems += report("EN'de var, TR'de yok", en - tr)
    problems += report("Sozlukte var ama HTML'de kullanilmiyor", (tr & en) - used)

    print()
    if problems:
        print("%d sorun bulundu." % problems)
        return 1
    print("Her sey yerinde.")
    return 0


if __name__ == '__main__':
    sys.exit(main())
