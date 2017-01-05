// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    console.log(this);
    var self = this;
    this.on('add', this.playFirst, this);

  },

  playFirst: function () {
    console.log('this.models', this.models);
      
  }



});

//http://stackoverflow.com/questions/8175054/backbone-js-collections-change-event-isnt-firing