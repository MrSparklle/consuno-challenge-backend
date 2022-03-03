import App from '@/app';
import IndexRoute from '@routes/index.route';
import ConstructorsRoute from '@/routes/constructors.route';
import validateEnv from '@utils/validateEnv';

// validate the ENV params before start the App. If any param is missing or with wrong information
// the server will not start.
validateEnv();

// starts the app and his avaliable routers
const app = new App([new IndexRoute(), new ConstructorsRoute()]);

// prints usefull information about the running app
app.listen();
