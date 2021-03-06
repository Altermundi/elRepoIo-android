import { store } from '../redux/store';
import { Handshake }  from 'react-native-handshake';
//import { NSD } from 'react-native-nsd';
import { NativeModules } from 'react-native'
import { DeviceEventEmitter } from 'react-native';

const {NSD } = NativeModules

export const userDiscovery = {
    startService: ({user, key})=> new Promise((res,rej) => {

        if(typeof user === 'undefined' || typeof key === 'undefined'){
            rej({error: 'no_user_data'})
        }else{
            NSD.stopDiscovery();
            NSD.unregister();
        
            DeviceEventEmitter.addListener('handshakeServerStarted', function(e){
                NSD.setServiceName('elrepoio');
                NSD.register(e.port)
                NSD.discover();
                res({status: 'running', ...e});
            });

            DeviceEventEmitter.addListener('peerPubKeyReceived', function(e){
                console.log("JS: peer public key received");
                store.dispatch({type: 'USER_DISCOVERY_RESULT',payload: {key: e.key}})
            });

            DeviceEventEmitter.addListener('handshakeServerStopped',()=> NSD.unregister())

            DeviceEventEmitter.addListener('serviceResolved', function(e){
                console.log("JS: service resolved");
                console.log(e.name, e.host, e.port); 
                if(e.name.indexOf('elrepoio') !== -1 ||  e.name.indexOf('Undefined service') !==  -1 ) {
                    Handshake.receiveKey(e.host, e.port);
                }
            });

            Handshake.startServer(key.replace(/\n/g,'\\n')+'\n');
        }
    })
}