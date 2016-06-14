import { Component } from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {HTTP_PROVIDERS} from '@angular/http'
import { NavigationComponent } from './navigation/navigation.component';
import { ReportedPostsComponent } from './reported_post/reported_post.component'
import {PostService} from './post.service';

@Component({
    selector: 'app',
    directives: [ROUTER_DIRECTIVES, NavigationComponent],
    providers: [HTTP_PROVIDERS,PostService],
    template: `
        <navigation></navigation>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
        <footer class="navbar-fixed-bottom">
            Handcrafted with 💝 by Mr Robot
        </footer>
    `,
    styles: [`
        footer{ text-align: center; font-size: 10px; color: lightgray; }
    `]
})
@RouteConfig([
    { path:'/reported_posts', name:'ReportedPosts', component: ReportedPostsComponent, useAsDefault: true }    
])    
export class AppComponent{}