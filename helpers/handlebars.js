function hbsHelpers(hbs) {
  return hbs.create({
    defaultLayout: 'layout',
    helpers: {
      section: function(name, options) {
        if(!this._sections) this._sections = {}
        this._sections[name] = options.fn(this)
        return null
      },
      i18n: function(label) {
        return __(label)
      },
      dizNome: function() {
        console.log('felipe');
        return 'felipe'
      }
    }
  })
}

module.exports = hbsHelpers
