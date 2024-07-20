source "https://rubygems.org"

# Se stai utilizzando GitHub Pages, decommentare la riga seguente:
gem "github-pages", group: :jekyll_plugins

# Se non stai utilizzando GitHub Pages, usa Jekyll direttamente:
# gem "jekyll", "~> 4.2.0"

# Plugins
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-seo-tag", "~> 2.6"
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
