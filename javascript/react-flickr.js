/** @jsx React.DOM */

// 
var controller = {
    fetch: function(params, callback){        
	// add base params
	params.api_key = 'f7419c7c353a4812a53523af90e255df';
	params.format = 'json';
	
	$.ajax({
	    url: 'http://api.flickr.com/services/feeds/photos_public.gne?id=23455178@N06',
	    type: 'GET',
	    dataType: 'jsonp',
	    data: params,
	    jsonp: 'jsoncallback',
	    success: function(data){
		callback(data);		
	    },	    
	    error: function() {
		callback();		
	    }
	});
    }
};

controller.fetch({

   per_page: 10,

   page: 1

}, function(ret) {    

   //I want to display only nine photos on my website
   var nineItems = []  

   for(i = 0; i < 9; ++i) nineItems[ i ] = ret.items[ i ]

   React.renderComponent( <showResponse data={ nineItems } />, document.getElementById('myflickr') );
});

var showResponse = React.createClass({

  render: function() {

    return (

      <div>

        <DataList data={this.props.data} />

      </div>
    );
  }
});

var Img = React.createClass({

  render: function() {

      return (<li><img src={this.props.path} /></li>);
  }

});

var DataList = React.createClass({

  render: function() {

      var obj  = this.props.data.map(function (photo) {

          var src = photo.media.m

          src_s = photo.media.m.replace('_m','_s')

          src_b = photo.media.m.replace('_m','_b')

          return <a href={src_b}><Img path={src_s}></Img></a>;

      });

      return(<ul id="photos">{obj}</ul>);
  }
});

