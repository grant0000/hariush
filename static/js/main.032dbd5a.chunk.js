(this.webpackJsonpjamming=this.webpackJsonpjamming||[]).push([[0],[,,,,,,,,,,,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n,s=a(0),c=a(1),r=a.n(c),i=a(8),o=a.n(i),l=(a(14),a(3)),h=a(4),u=a(2),d=a(6),p=a(5),m=(a(15),a(16),function(t){Object(d.a)(a,t);var e=Object(p.a)(a);function a(t){var n;return Object(l.a)(this,a),(n=e.call(this,t)).search=n.search.bind(Object(u.a)(n)),n.handleTermChange=n.handleTermChange.bind(Object(u.a)(n)),n.state={term:""},n}return Object(h.a)(a,[{key:"search",value:function(){this.props.onSearch(this.state.term)}},{key:"handleTermChange",value:function(t){this.setState({term:t.target.value})}},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"SearchBar",children:[Object(s.jsx)("input",{placeholder:"Enter A Song, Album, or Artist",onChange:this.handleTermChange}),Object(s.jsx)("button",{className:"SearchButton",onClick:this.search,children:"SEARCH"})]})}}]),a}(r.a.Component)),j=(a(17),a(18),a(19),function(t){Object(d.a)(a,t);var e=Object(p.a)(a);function a(t){var n;return Object(l.a)(this,a),(n=e.call(this,t)).addTrack=n.addTrack.bind(Object(u.a)(n)),n.removeTrack=n.removeTrack.bind(Object(u.a)(n)),n}return Object(h.a)(a,[{key:"renderAction",value:function(){return this.props.isRemoval?Object(s.jsx)("button",{onClick:this.removeTrack,className:"Track-action",children:"-"}):Object(s.jsx)("button",{onClick:this.addTrack,className:"Track-action",children:"+"})}},{key:"addTrack",value:function(){this.props.onAdd(this.props.track)}},{key:"removeTrack",value:function(){this.props.onRemove(this.props.track)}},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"Track",children:[Object(s.jsxs)("div",{className:"Track-information",children:[Object(s.jsxs)("h3",{children:[" ",this.props.track.Name," "]}),Object(s.jsxs)("p",{children:[" ",this.props.track.Artist," | ",this.props.track.Album," "]})]}),this.renderAction()]})}}]),a}(r.a.Component)),b=function(t){Object(d.a)(a,t);var e=Object(p.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var t=this;return Object(s.jsx)("div",{className:"TrackList",children:this.props.tracks.map((function(e){return Object(s.jsx)(j,{track:e,onAdd:t.props.onAdd,isRemoval:t.props.isRemoval,onRemove:t.props.onRemove},e.ID)}))})}}]),a}(r.a.Component),v=function(t){Object(d.a)(a,t);var e=Object(p.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"SearchResults",children:[Object(s.jsx)("h2",{children:"Results"}),Object(s.jsx)(b,{onAdd:this.props.onAdd,tracks:this.props.searchResults,isRemoval:!1})]})}}]),a}(r.a.Component),f=(a(20),function(t){Object(d.a)(a,t);var e=Object(p.a)(a);function a(t){var n;return Object(l.a)(this,a),(n=e.call(this,t)).handleNameChange=n.handleNameChange.bind(Object(u.a)(n)),n}return Object(h.a)(a,[{key:"handleNameChange",value:function(t){var e=t.target.value;this.props.onNameChange(e)}},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"Playlist",children:[Object(s.jsx)("input",{onChange:this.handleNameChange,defaultValue:"New Playlist"}),Object(s.jsx)(b,{isRemoval:!0,onRemove:this.props.onRemove,tracks:this.props.playlistTracks}),Object(s.jsx)("button",{className:"Playlist-save",onClick:this.props.onSave,children:"SAVE TO SPOTIFY"})]})}}]),a}(r.a.Component)),k={getAccessToken:function(){if(n)return n;var t=window.location.href.match(/access_token=([^&]*)/),e=window.location.href.match(/expires_in=([^&]*)/);if(t&&e){n=t[1];var a=Number(e[1]);return window.setTimeout((function(){return n=""}),1e3*a),window.history.pushState("Access Token",null,"/"),n}var s="https://accounts.spotify.com/authorize?client_id=".concat("2a0d936d36c146cea588731a6f9b9977","&response_type=token&scope=playlist-modify-public&redirect_uri=").concat("http://localhost:3000/");window.location=s},search:function(t){var e=k.getAccessToken();return fetch("https://api.spotify.com/v1/search?type=track&q=".concat(t),{headers:{Authorization:"Bearer "+e}}).then((function(t){return t.json()})).then((function(t){return t.tracks?t.tracks.items.map((function(t){return{ID:t.id,Name:t.name,Artist:t.artists[0].name,Album:t.album.name,URI:t.uri}})):[]}))},savePlaylist:function(t,e){if(t&&e.length){var a,n=k.getAccessToken(),s={Authorization:"Bearer ".concat(n)};return fetch("https://api.spotify.com/v1/me",{headers:s}).then((function(t){return t.json()})).then((function(e){return a=e.id,fetch("https://api.spotify.com/v1/users/".concat(a,"/playlists"),{headers:s,method:"POST",body:JSON.stringify({name:t})})})).then((function(t){return t.json()})).then((function(t){var n=t.id;return fetch("https://api.spotify.com/v1/users/".concat(a,"/playlists/").concat(n,"/tracks"),{headers:s,method:"POST",body:JSON.stringify({uris:e})})})).catch((function(t){return console.log("I'm over here you faggot hahahahahaha")}))}}},y=k,O=function(t){Object(d.a)(a,t);var e=Object(p.a)(a);function a(t){var n;return Object(l.a)(this,a),(n=e.call(this,t)).state={searchResults:[],playlistName:"New Playlist",playlistTracks:[]},n.addTrack=n.addTrack.bind(Object(u.a)(n)),n.removeTrack=n.removeTrack.bind(Object(u.a)(n)),n.updatePlaylistName=n.updatePlaylistName.bind(Object(u.a)(n)),n.savePlaylist=n.savePlaylist.bind(Object(u.a)(n)),n.search=n.search.bind(Object(u.a)(n)),n}return Object(h.a)(a,[{key:"addTrack",value:function(t){var e=this.state.playlistTracks;e.find((function(e){return e.ID===t.ID}))||(e.push(t),this.setState({playlistTracks:e}))}},{key:"removeTrack",value:function(t){var e=this.state.playlistTracks;e.find((function(e){return e.ID===t.ID}))&&(e.pop(t),this.setState({playlistTracks:e}))}},{key:"updatePlaylistName",value:function(t){this.setState({playlistName:t})}},{key:"savePlaylist",value:function(){var t=this,e=this.state.playlistTracks.map((function(t){return t.URI}));y.savePlaylist(this.state.playlistName,e).then((function(){t.setState({playlistName:"New Playlist",playlistTracks:[]})})).catch(console.log("holy shit youre retarded hahahahaha"))}},{key:"search",value:function(t){var e=this;y.search(t).then((function(t){e.setState({searchResults:t})}))}},{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsxs)("h1",{children:["Ha",Object(s.jsx)("span",{className:"highlight",children:"riu"}),"sh"]}),Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(m,{onSearch:this.search}),Object(s.jsxs)("div",{className:"App-playlist",children:[Object(s.jsx)(v,{onAdd:this.addTrack,searchResults:this.state.searchResults}),Object(s.jsx)(f,{onSave:this.savePlaylist,onNameChange:this.updatePlaylistName,onRemove:this.removeTrack,playlistName:this.state.playlistName,playlistTracks:this.state.playlistTracks})]})]})]})}}]),a}(r.a.Component),T=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,22)).then((function(e){var a=e.getCLS,n=e.getFID,s=e.getFCP,c=e.getLCP,r=e.getTTFB;a(t),n(t),s(t),c(t),r(t)}))};o.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(O,{})}),document.getElementById("root")),T()}],[[21,1,2]]]);
//# sourceMappingURL=main.032dbd5a.chunk.js.map