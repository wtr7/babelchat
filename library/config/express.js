import bodyParser from 'body-parser';
import {renderFile} from 'ejs';

export default function (app) {
    app.set('views', 'app');
    app.engine('html', renderFile);
    app.set('view engine', 'html');

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    // app.use(function (req, res, next) {
    //    res.setHeader('Access-Control-Allow-Origin', '*');
    //    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    //    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    //    res.setHeader('Access-Control-Allow-Credentials', true);
    //    next();
    // });
}