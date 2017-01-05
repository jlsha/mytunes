// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', function() {
      if (this.models.length === 1) {
        this.playFirst();
      }
    });

    this.on('ended', function() {
      this.shift();
      if (this.models.length > 0) {
        this.playFirst();
      }
    });

    this.on('dequeue', function() {
      this.shift();
    });

  },

  playFirst: function () {
    this.models[0].play();
  }

});
