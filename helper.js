const helper = {
    formatResponse: function(req, notes) {
      let n = notes.map( note => {
          return {
            id: note._id,
            title: note.title,
            description: note.description
          } 
      });
      return n;
    }
  }
  
  module.exports = helper;