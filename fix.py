import re

html_path = '/home/debian/inspire-studio/index.html'
with open(html_path, 'r', encoding='utf-8') as f:
    content = f.read()

new_track = '''            <div class="ticker-track">
                <!-- Group 1 -->
                <div class="ticker-item"><img src="logos/logo jazzy feet.gif" alt="Jazzy Feet" class="logo-lg"></div>
                <div class="ticker-item"><img src="logos/Logo-Yoze-violet.svg" alt="Yoze"></div>
                <div class="ticker-item"><img src="logos/logo acm.avif" alt="ACM" class="logo-xl"></div>
                <div class="ticker-item"><img src="logos/logo dustrie et cie.jpg" alt="Dustry Cie" class="logo-lg"></div>
                <div class="ticker-item"><img src="logos/logo impro lala.webp" alt="Impro La La" class="logo-lg"></div>
                <div class="ticker-item"><img src="logos/logo-poonam1.webp" alt="Poonam"></div>
                <!-- Group 2 -->
                <div class="ticker-item"><img src="logos/logo jazzy feet.gif" alt="Jazzy Feet" class="logo-lg"></div>
                <div class="ticker-item"><img src="logos/Logo-Yoze-violet.svg" alt="Yoze"></div>
                <div class="ticker-item"><img src="logos/logo acm.avif" alt="ACM" class="logo-xl"></div>
                <div class="ticker-item"><img src="logos/logo dustrie et cie.jpg" alt="Dustry Cie" class="logo-lg"></div>
                <div class="ticker-item"><img src="logos/logo impro lala.webp" alt="Impro La La" class="logo-lg"></div>
                <div class="ticker-item"><img src="logos/logo-poonam1.webp" alt="Poonam"></div>
            </div>'''

content = re.sub(r'<div class="ticker-track">.*?</div>\n        </div>', new_track + '\n        </div>', content, flags=re.DOTALL)

with open(html_path, 'w', encoding='utf-8') as f:
    f.write(content)
