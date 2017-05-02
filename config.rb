page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

activate :external_pipeline do |ext|
  ext.name = :webpack
  if build?
    ext.command = "./bin/webpack --bail --color"
  else
    ext.command = "./bin/webpack --watch -d --color"
  end
  ext.source = ".tmp/dist"
  ext.latency = 1
end
