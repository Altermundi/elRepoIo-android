import { Home } from './containers/home';
import { Status } from './containers/status';
import { Search } from './containers/search';
import { Upload } from './containers/upload';
import { AppBar } from "./components/appbar";
import { Files } from "./containers/files";
import { FileInfo} from "./containers/fileInfo"
import { DownloadStatus } from "./containers/downloadStatus";
import { Splash } from "./containers/splash";
import {ChangeProfile}  from './containers/changeProfile';

export const Pages = [
    { component: AppBar, id: 'elRepoIO.appBar', title: 'appbar'},
    { component: Splash, id: 'elRepoIO.splash', title: 'Splash'},
    { component: Home, id: 'elRepoIO.home', title: 'Home'},
    { component: Status, id: 'elRepoIO.status', title: 'Status'},
    { component: Search, id: 'elRepoIO.search', title: 'Search'},
    { component: Upload, id: 'elRepoIO.upload', title: 'Upload'},
    { component: FileInfo, id: 'elRepoIO.fileInfo', title: 'File Information'},
    { component: Files, id: 'elRepoIO.fileList', title: 'File List'},
    { component: DownloadStatus, id: 'elRepoIO.downloadStatus', title: 'Download Status'},
    { component: ChangeProfile, id: 'elRepoIO.changeProfile', title: 'Change Profile'}
]