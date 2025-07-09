import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { LoginComponent } from './app/login/login.component';
import { Signup } from './app/signup/signup.component';
import { Menu } from './app/menu/menu.component';
import { PostList } from './app/post-list/post-list';

// bootstrapApplication(LoginComponent, appConfig)
//   .catch((err) => console.error(err));
 
// bootstrapApplication(App, appConfig)
//   .catch((err) => console.error(err));


// bootstrapApplication(Signup, appConfig).catch((err)=> console.error(err));


// bootstrapApplication(Menu, appConfig).catch((err)=> console.error(err));

bootstrapApplication(PostList, appConfig).catch((err)=> console.error(err));