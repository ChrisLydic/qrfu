import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store.js';
import './index.css';
import Upload from './Upload';
import UploadList, { LinkList } from './UploadList';
import ProfileForm from './ProfileForm';
import Socket from './Socket';

function MyApp(props) {
	const submit = values => {
		window.alert (JSON.stringify (values));
	};

	const socket = new Socket();
	  
	return (
		<Provider store={ store }>
			<div>
				<h1>QR Upload Examples</h1>
				<h2>1:1 ratio, images only, single file: (redux form)</h2>
				<ProfileForm onSubmit={submit}/>
				<h2>Any ratio, any filetype, multiple files:</h2>
				<Upload ratio={0} filetype='all' multiple={true} uploadlist={UploadList} socket={socket} />
				<h2>6:9 ratio, images only, multiple files:</h2>
				<Upload ratio={6/9} filetype='image' multiple={true} uploadlist={LinkList} socket={socket} />
				<h2>Audio only, multiple files:</h2>
				<Upload ratio={0} filetype='audio' multiple={true} uploadlist={UploadList} socket={socket} />
			</div>
		</Provider>
	);
}

ReactDOM.render(<MyApp />, document.getElementById('root'));
