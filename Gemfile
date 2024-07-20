source "https://rubygems.org"

# Se stai utilizzando GitHub Pages, decommenta la riga seguente:
gem "github-pages", group: :jekyll_plugins

# Se non stai utilizzando GitHub Pages, usa Jekyll direttamente:
# gem "jekyll", "~> 4.2.0"

# Questo è il tema di default per i nuovi siti Jekyll.
gem "minima", "~> 2.5"

# Se stai utilizzando un tema personalizzato, aggiungi la gemma qui:
# gem "nome-del-tuo-tema"

# Plugin di Jekyll
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-seo-tag", "~> 2.6"
  gem "jekyll-sitemap", "~> 1.4"
  gem "jekyll-paginate", "~> 1.1"
  gem "jekyll-compose", "~> 0.12.0"
  gem "jekyll-gist", "~> 1.5"
  gem "jekyll-github-metadata", "~> 2.13"
  gem "jekyll-mentions", "~> 1.6"
  gem "jekyll-redirect-from", "~> 0.16.0"
  gem "jemoji", "~> 0.12.0"
end

# Windows e JRuby non includono zoneinfo files, quindi bundle la gem tzinfo-data
# e associala alle piattaforme Windows e JRuby nel file Gemfile.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

# Performance-booster per watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds since newer versions of the gem
# do not have a Java counterpart.
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]

# Aggiungi questa gemma se vuoi utilizzare la compressione HTML
gem "jekyll-compress-html", "~> 1.0"

# Se hai bisogno di supporto per Sass
gem "sassc", "~> 2.4"

# Per il supporto di LiveReload durante lo sviluppo
group :development do
  gem "jekyll-livereload", "~> 0.2.2"
end
