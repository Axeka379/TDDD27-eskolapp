(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./posts/posts.component */ "./src/app/posts/posts.component.ts");
/* harmony import */ var _chat_window_chat_window_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat-window/chat-window.component */ "./src/app/chat-window/chat-window.component.ts");







var routes = [
    {
        path: '',
        component: _chat_window_chat_window_component__WEBPACK_IMPORTED_MODULE_6__["ChatWindowComponent"]
    },
    {
        path: 'chat/:server_id',
        component: _chat_window_chat_window_component__WEBPACK_IMPORTED_MODULE_6__["ChatWindowComponent"]
    },
    {
        path: 'details/:id',
        component: _details_details_component__WEBPACK_IMPORTED_MODULE_4__["DetailsComponent"]
    },
    {
        path: 'posts',
        component: _posts_posts_component__WEBPACK_IMPORTED_MODULE_5__["PostsComponent"]
    },
    {
        path: 'users',
        component: _users_users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"]
    },
    {
        path: '**',
        redirectTo: ''
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n\t<app-sidebar></app-sidebar>\n\n\t<div id=\"content\">\n\t\t<router-outlet></router-outlet>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'frontend';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./posts/posts.component */ "./src/app/posts/posts.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");
/* harmony import */ var _chat_window_chat_window_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./chat-window/chat-window.component */ "./src/app/chat-window/chat-window.component.ts");
/* harmony import */ var _chat_form_chat_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./chat-form/chat-form.component */ "./src/app/chat-form/chat-form.component.ts");
/* harmony import */ var _create_room_form_create_room_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./create-room-form/create-room-form.component */ "./src/app/create-room-form/create-room-form.component.ts");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./chat.service */ "./src/app/chat.service.ts");
/* harmony import */ var _websocket_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./websocket.service */ "./src/app/websocket.service.ts");
/* harmony import */ var _authentication_authentication_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./authentication/authentication.module */ "./src/app/authentication/authentication.module.ts");
/* harmony import */ var _authentication_token_interceptor__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./authentication/token.interceptor */ "./src/app/authentication/token.interceptor.ts");






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__["SidebarComponent"],
                _posts_posts_component__WEBPACK_IMPORTED_MODULE_11__["PostsComponent"],
                _users_users_component__WEBPACK_IMPORTED_MODULE_12__["UsersComponent"],
                _details_details_component__WEBPACK_IMPORTED_MODULE_13__["DetailsComponent"],
                _chat_window_chat_window_component__WEBPACK_IMPORTED_MODULE_14__["ChatWindowComponent"],
                _chat_form_chat_form_component__WEBPACK_IMPORTED_MODULE_15__["ChatFormComponent"],
                _create_room_form_create_room_form_component__WEBPACK_IMPORTED_MODULE_16__["CreateRoomFormComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientXsrfModule"].withOptions({
                    cookieName: 'My-Xsrf-Cookie',
                    headerName: 'My-Xsrf-Header',
                }),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
                _authentication_authentication_module__WEBPACK_IMPORTED_MODULE_19__["AuthenticationModule"]
            ],
            providers: [
                {
                    provide: _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"],
                    useClass: _angular_common__WEBPACK_IMPORTED_MODULE_5__["HashLocationStrategy"]
                },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                    useClass: _authentication_token_interceptor__WEBPACK_IMPORTED_MODULE_20__["TokenInterceptor"],
                    multi: true
                },
                _websocket_service__WEBPACK_IMPORTED_MODULE_18__["WebsocketService"],
                _chat_service__WEBPACK_IMPORTED_MODULE_17__["ChatService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
            entryComponents: [
                _create_room_form_create_room_form_component__WEBPACK_IMPORTED_MODULE_16__["CreateRoomFormComponent"],
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/authentication/authentication.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/authentication/authentication.module.ts ***!
  \*********************************************************/
/*! exports provided: AuthenticationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function() { return AuthenticationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/authentication/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/authentication/signup/signup.component.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user.service */ "./src/app/authentication/user.service.ts");







var AuthenticationModule = /** @class */ (function () {
    function AuthenticationModule() {
    }
    AuthenticationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            exports: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"]
            ],
            entryComponents: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"]
            ],
            providers: [
                _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
            ]
        })
    ], AuthenticationModule);
    return AuthenticationModule;
}());



/***/ }),

/***/ "./src/app/authentication/login/login.component.html":
/*!***********************************************************!*\
  !*** ./src/app/authentication/login/login.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\n\t<div class=\"modal-header\">\n\t\t<h4 class=\"modal-title\" id=\"modal-basic-title\">Log in</h4>\n\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss()\">\n\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t</button>\n\t</div>\n\n\t<form\n\t\tngNativeValidate\n\t\t#createServerForm=\"ngForm\"\n\t\t(ngSubmit)=\"onSubmit(createServerForm)\">\n\t\t<div class=\"modal-body\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"username\">Name</label>\n\t\t\t\t<input\n\t\t\t\t\tngModel\n\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t#serverName\n\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\tid=\"username\"\n\t\t\t\t\tname=\"username\"\n\t\t\t\t\tautocomplete=\"off\"\n\t\t\t\t\tplaceholder=\"Name\"\n\t\t\t\t\t[(ngModel)]=\"form.username\"\n\t\t\t\t\tngbAutofocus\n\t\t\t\t\trequired>\n\t\t\t</div>\n\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"password\">Password</label>\n\t\t\t\t<input class=\"form-control\" type=\"password\" name=\"password\" [(ngModel)]=\"form.password\" placeholder=\"Password\" required>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"modal-footer\">\n\t\t\t<button\n\t\t\t\ttype=\"submit\"\n\t\t\t\tclass=\"btn btn-outline-dark\">Log in</button>\n\t\t</div>\n\t</form>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/authentication/login/login.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/authentication/login/login.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/authentication/login/login.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/authentication/login/login.component.ts ***!
  \*********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(activeModal, http) {
        this.activeModal = activeModal;
        this.http = http;
        this.baseUrl = "http://localhost:8000";
        this.title = 'login';
        this.form = {
            username: '',
            password: ''
        };
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.onSubmit = function () {
        this.http.post(this.baseUrl + '/login/', this.form)
            .subscribe(function (result) {
            if (result.token) {
                var token = result.token;
                console.log("Saved token", token);
                localStorage.setItem('token', token);
            }
            if (result.user) {
                var user = result.user;
                console.log("Saved user", user);
                localStorage.setItem('user', user);
            }
            console.log('I logged in', result);
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/authentication/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/authentication/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/authentication/signup/signup.component.html":
/*!*************************************************************!*\
  !*** ./src/app/authentication/signup/signup.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\t<div class=\"modal-header\">\n\t\t<h4 class=\"modal-title\" id=\"modal-basic-title\">Log in</h4>\n\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss()\">\n\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t</button>\n\t</div>\n\n\t<form\n\t\tngNativeValidate\n\t\t#createServerForm=\"ngForm\"\n\t\t(ngSubmit)=\"onSubmit(createServerForm)\">\n\t\t<div class=\"modal-body\">\n\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"username\">Username</label>\n\t\t\t\t<input\n\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\tname=\"username\"\n\t\t\t\t\t[(ngModel)]=\"form.username\"\n\t\t\t\t\tplaceholder=\"Username\"\n\t\t\t\t\ttype=\"text\"\n\t\t\t\t\tmin_length=\"1\"\n\t\t\t\t\tmax_length=\"150\"\n\t\t\t\t\tngbAutofocus\n\t\t\t\t\trequired>\n\t\t\t</div>\n\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"email\">Email</label>\n\t\t\t\t<input\n\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\tname=\"email\"\n\t\t\t\t\t[(ngModel)]=\"form.email\"\n\t\t\t\t\tplaceholder=\"Email\"\n\t\t\t\t\ttype=\"email\"\n\t\t\t\t\trequired>\n\t\t\t</div>\n\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"password1\">Password</label>\n\t\t\t\t<input\n\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\tname=\"password1\"\n\t\t\t\t\t[(ngModel)]=\"form.password1\"\n\t\t\t\t\tplaceholder=\"Password\"\n\t\t\t\t\ttype=\"text\"\n\t\t\t\t\trequired>\n\t\t\t</div>\n\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"password2\">Comfirm password</label>\n\t\t\t\t<input\n\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\tname=\"password2\"\n\t\t\t\t\t[(ngModel)]=\"form.password2\"\n\t\t\t\t\tplaceholder=\"Comfirm password\"\n\t\t\t\t\ttype=\"text\"\n\t\t\t\t\trequired>\n\t\t\t</div>\n\n\t\t</div>\n\n\t\t<div class=\"modal-footer\">\n\t\t\t<button\n\t\t\t\ttype=\"submit\"\n\t\t\t\tclass=\"btn btn-outline-dark\">Sign up</button>\n\t\t</div>\n\n\t</form>\n</div>"

/***/ }),

/***/ "./src/app/authentication/signup/signup.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/authentication/signup/signup.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/authentication/signup/signup.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/authentication/signup/signup.component.ts ***!
  \***********************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var SignupComponent = /** @class */ (function () {
    function SignupComponent(activeModal, http) {
        this.activeModal = activeModal;
        this.http = http;
        this.title = 'login';
        this.form = {
            "username": "",
            "email": "",
            "password1": "",
            "password2": ""
        };
    }
    SignupComponent.prototype.ngOnInit = function () { };
    SignupComponent.prototype.onSubmit = function () {
        this.http.post('http://127.0.0.1:8000/register/', this.form)
            .subscribe(function (result) {
            console.log('I signed up', result);
        }, function (error) {
            console.log(error);
        });
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/authentication/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/authentication/signup/signup.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/authentication/token.interceptor.ts":
/*!*****************************************************!*\
  !*** ./src/app/authentication/token.interceptor.ts ***!
  \*****************************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/app/authentication/user.service.ts");




var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor(user) {
        this.user = user;
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        request = request.clone({
            setHeaders: {
                Authorization: "JWT " + this.user.token
            }
        });
        return next.handle(request).do(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                console.log("TokenInterceptor: Success!");
                // do stuff with response if you want
            }
        }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                if (err.status === 401) {
                    console.log("TokenInterceptor: Oof!");
                    // redirect to the login route
                    // or show a modal
                }
            }
        });
    };
    TokenInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], TokenInterceptor);
    return TokenInterceptor;
}());



/***/ }),

/***/ "./src/app/authentication/user.service.ts":
/*!************************************************!*\
  !*** ./src/app/authentication/user.service.ts ***!
  \************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var UserService = /** @class */ (function () {
    function UserService() {
    }
    Object.defineProperty(UserService.prototype, "token", {
        get: function () {
            return localStorage.getItem('token');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserService.prototype, "httpOptions", {
        get: function () {
            return {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'Authorization': 'JWT ' + this.token
                })
            };
        },
        enumerable: true,
        configurable: true
    });
    UserService.prototype.isAuthenticated = function () {
        // get the token
        var token = this.token;
        // return a boolean reflecting 
        // whether or not the token is expired
        return Object(jwt_decode__WEBPACK_IMPORTED_MODULE_2__["tokenNotExpired"])(null, token);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/chat-form/chat-form.component.html":
/*!****************************************************!*\
  !*** ./src/app/chat-form/chat-form.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form\n\t#chatForm=\"ngForm\"\n\t(keydown.enter)=\"chatForm.form.valid && onSubmit($event, chatForm)\"\n\t(ngSubmit)=\"chatForm.form.valid && onSubmit($event, chatForm)\"\n\tclass=\"pt-3\"\n\tnovalidate>\n\t<div\n\t\tclass=\"form-group\">\n\t\t<textarea\n\t\t\tngModel\n\t\t\t#chatInput\n\t\t\tid=\"chatInput\"\n\t\t\tname=\"chatInput\"\n\t\t\tclass=\"form-control\"\n\t\t\trows=\"1\"\n\t\t\tplaceholder=\"Message #general\"\n\t\t\ttabindex=\"1\"\n\t\t\tmaxlength=\"2000\"></textarea>\n\t</div>\n</form>"

/***/ }),

/***/ "./src/app/chat-form/chat-form.component.scss":
/*!****************************************************!*\
  !*** ./src/app/chat-form/chat-form.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXQtZm9ybS9jaGF0LWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/chat-form/chat-form.component.ts":
/*!**************************************************!*\
  !*** ./src/app/chat-form/chat-form.component.ts ***!
  \**************************************************/
/*! exports provided: ChatFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatFormComponent", function() { return ChatFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chat.service */ "./src/app/chat.service.ts");



var ChatFormComponent = /** @class */ (function () {
    //@ViewChild("chatInput") chatInput: ElementRef;
    function ChatFormComponent(chatService) {
        this.chatService = chatService;
    }
    ChatFormComponent.prototype.ngOnInit = function () {
        //this.chatInput.nativeElement.focus();
    };
    ChatFormComponent.prototype.onSubmit = function ($event, formData) {
        var message = formData.form.value.chatInput;
        $event.preventDefault();
        formData.reset();
        this.chatService.sendMessage(message);
    };
    ChatFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat-form',
            template: __webpack_require__(/*! ./chat-form.component.html */ "./src/app/chat-form/chat-form.component.html"),
            styles: [__webpack_require__(/*! ./chat-form.component.scss */ "./src/app/chat-form/chat-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]])
    ], ChatFormComponent);
    return ChatFormComponent;
}());



/***/ }),

/***/ "./src/app/chat-window/chat-window.component.html":
/*!********************************************************!*\
  !*** ./src/app/chat-window/chat-window.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"chatWrapper flex-grow-1\">\n\t<div class=\"my-3 p-3 bg-white rounded shadow-sm\">\n\n\t\t<div *ngFor=\"let msg of messages\" [ngSwitch]=\"msg.type\">\n\n\t\t\t<div class=\"msgBox\" *ngSwitchCase=\"'message'\">\n\t\t\t\t<img src=\"{{ msg.image }}\" width=\"44\" height=\"44\" />\n\t\t\t\t<div class=\"msgContent\">\n\t\t\t\t\t<div class=\"msgHeader\">\n\t\t\t\t\t\t<span class=\"text-muted mr-1\"><small>{{ msg.timestamp | date: \"shortTime\" }}</small></span>\n\t\t\t\t\t\t<span class=\"font-weight-bold\">{{ msg.author }}</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"msgText\">{{ msg.content }}</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"msgBox\" *ngSwitchCase=\"'join'\">\n\t\t\t\t<div class=\"msgContent\">\n\t\t\t\t\t<div class=\"msgHeader\"></div>\n\t\t\t\t\t<span class=\"msgText\">{{ msg.author }} join the room</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"msgBox\" *ngSwitchCase=\"'leave'\">\n\t\t\t\t<div class=\"msgContent\">\n\t\t\t\t\t<div class=\"msgHeader\"></div>\n\t\t\t\t\t<span class=\"msgText\">{{ msg.author }} left the room</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</div>\n\n\t\t<app-chat-form></app-chat-form>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/chat-window/chat-window.component.scss":
/*!********************************************************!*\
  !*** ./src/app/chat-window/chat-window.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Wrapper for messaging, input area and field for messages */\n.messagingWrapper {\n  background: white;\n  width: 100%; }\n.messagingWrapper hr {\n  margin: 0; }\n#messages {\n  min-height: 300px;\n  max-height: 600px;\n  overflow: auto;\n  text-align: center;\n  width: inherit; }\n/* Input area */\n#msgInputWrapper {\n  display: flex; }\nform[name=\"msgInputForm\"] {\n  display: flex;\n  flex-grow: 1;\n  border: 2px solid #aaa;\n  border-radius: 4px;\n  margin: 4px; }\nform[name=\"msgInputForm\"] input[type=submit] {\n  border-left: 2px solid #aaa; }\nform[name=\"msgInputForm\"] input {\n  font-size: 16px;\n  padding: 6px;\n  border: 0; }\n#msgInput {\n  width: 100%; }\n#msgRefresh {\n  margin: 4px;\n  border: 2px solid #aaa;\n  border-radius: 4px;\n  font-size: 20px; }\n/* One message box */\n.msgBox {\n  display: flex;\n  padding: 5px;\n  text-align: left;\n  font-size: 16px; }\n.msgContent {\n  width: 90%;\n  display: block;\n  margin-left: 10px; }\n.msgText {\n  word-break: break-all; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dvbGVuL0Vza29sYXBwL2Vza29sYXBwL2Zyb250ZW5kL2FuZ3VsYXIvc3JjL2FwcC9jaGF0LXdpbmRvdy9jaGF0LXdpbmRvdy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2REFBQTtBQUVBO0VBQ0MsaUJBQWlCO0VBQ2pCLFdBQVcsRUFBQTtBQUVaO0VBQ0MsU0FBUyxFQUFBO0FBRVY7RUFDQyxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsY0FBYyxFQUFBO0FBSWYsZUFBQTtBQUVBO0VBQ0MsYUFBYSxFQUFBO0FBR2Q7RUFDQyxhQUFhO0VBQ2IsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsV0FBVyxFQUFBO0FBRVo7RUFDQywyQkFBMkIsRUFBQTtBQUU1QjtFQUNDLGVBQWU7RUFDZixZQUFZO0VBQ1osU0FBUyxFQUFBO0FBR1Y7RUFDQyxXQUFXLEVBQUE7QUFHWjtFQUNDLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTtBQUloQixvQkFBQTtBQUVBO0VBQ0MsYUFBYTtFQUNiLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBO0FBR2hCO0VBQ0MsVUFBVTtFQUNWLGNBQWM7RUFDZCxpQkFBaUIsRUFBQTtBQUdsQjtFQUNDLHFCQUFxQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY2hhdC13aW5kb3cvY2hhdC13aW5kb3cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBXcmFwcGVyIGZvciBtZXNzYWdpbmcsIGlucHV0IGFyZWEgYW5kIGZpZWxkIGZvciBtZXNzYWdlcyAqL1xuXG4ubWVzc2FnaW5nV3JhcHBlciB7XG5cdGJhY2tncm91bmQ6IHdoaXRlO1xuXHR3aWR0aDogMTAwJTtcbn1cbi5tZXNzYWdpbmdXcmFwcGVyIGhyIHtcblx0bWFyZ2luOiAwO1xufVxuI21lc3NhZ2VzIHtcblx0bWluLWhlaWdodDogMzAwcHg7XG5cdG1heC1oZWlnaHQ6IDYwMHB4O1xuXHRvdmVyZmxvdzogYXV0bztcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR3aWR0aDogaW5oZXJpdDtcbn1cblxuXG4vKiBJbnB1dCBhcmVhICovXG5cbiNtc2dJbnB1dFdyYXBwZXIge1xuXHRkaXNwbGF5OiBmbGV4O1xufVxuXG5mb3JtW25hbWU9XCJtc2dJbnB1dEZvcm1cIl0ge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWdyb3c6IDE7XG5cdGJvcmRlcjogMnB4IHNvbGlkICNhYWE7XG5cdGJvcmRlci1yYWRpdXM6IDRweDtcblx0bWFyZ2luOiA0cHg7XG59XG5mb3JtW25hbWU9XCJtc2dJbnB1dEZvcm1cIl0gaW5wdXRbdHlwZT1zdWJtaXRdIHtcblx0Ym9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjYWFhO1xufVxuZm9ybVtuYW1lPVwibXNnSW5wdXRGb3JtXCJdIGlucHV0IHtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRwYWRkaW5nOiA2cHg7XG5cdGJvcmRlcjogMDtcbn1cblxuI21zZ0lucHV0IHtcblx0d2lkdGg6IDEwMCU7XG59XG5cbiNtc2dSZWZyZXNoIHtcblx0bWFyZ2luOiA0cHg7XG5cdGJvcmRlcjogMnB4IHNvbGlkICNhYWE7XG5cdGJvcmRlci1yYWRpdXM6IDRweDtcblx0Zm9udC1zaXplOiAyMHB4O1xufVxuXG5cbi8qIE9uZSBtZXNzYWdlIGJveCAqL1xuXG4ubXNnQm94IHtcblx0ZGlzcGxheTogZmxleDtcblx0cGFkZGluZzogNXB4O1xuXHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHRmb250LXNpemU6IDE2cHg7XG59XG5cbi5tc2dDb250ZW50IHtcblx0d2lkdGg6IDkwJTtcblx0ZGlzcGxheTogYmxvY2s7XG5cdG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4ubXNnVGV4dCB7XG5cdHdvcmQtYnJlYWs6IGJyZWFrLWFsbDsgIFxufVxuIl19 */"

/***/ }),

/***/ "./src/app/chat-window/chat-window.component.ts":
/*!******************************************************!*\
  !*** ./src/app/chat-window/chat-window.component.ts ***!
  \******************************************************/
/*! exports provided: ChatWindowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatWindowComponent", function() { return ChatWindowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../chat.service */ "./src/app/chat.service.ts");




var ChatWindowComponent = /** @class */ (function () {
    function ChatWindowComponent(chatService, route) {
        var _this = this;
        this.chatService = chatService;
        this.route = route;
        this.route.params.subscribe(function (params) {
            _this.chatService.selectedServerId = params.server_id;
        });
    }
    ChatWindowComponent.prototype.ngOnInit = function () {
        this.chatService.onMessage$.subscribe(
        // Called whenever there is a message from the chat service.
        function (msg) {
            console.log("chat-window received", msg);
            //this.addMessage(msg);
        }, 
        // Called if at any point WebSocket API signals some kind of error.
        function (err) {
            console.log('chat window error:', err);
            // reconnect
        }, 
        // Called when connection is closed (for whatever reason).
        function () {
            console.log('chat window close');
        });
    };
    Object.defineProperty(ChatWindowComponent.prototype, "messages", {
        get: function () {
            return this.chatService.messages;
        },
        enumerable: true,
        configurable: true
    });
    ChatWindowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat-window',
            template: __webpack_require__(/*! ./chat-window.component.html */ "./src/app/chat-window/chat-window.component.html"),
            styles: [__webpack_require__(/*! ./chat-window.component.scss */ "./src/app/chat-window/chat-window.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ChatWindowComponent);
    return ChatWindowComponent;
}());



/***/ }),

/***/ "./src/app/chat.service.ts":
/*!*********************************!*\
  !*** ./src/app/chat.service.ts ***!
  \*********************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _websocket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./websocket.service */ "./src/app/websocket.service.ts");





var ChatService = /** @class */ (function () {
    function ChatService(wsService, http) {
        var _this = this;
        this.wsService = wsService;
        this.http = http;
        this.rootUrl = "";
        this.serverList = [];
        this.messageList = {};
        this.serverList.push({
            id: 1,
            name: 'first server'
        });
        this.messageList[1] = [];
        this.serverList.push({
            id: 2,
            name: 'my new server'
        });
        this.messageList[2] = [];
        this.selectedServerId = 1;
        this.messageSubject = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        wsService.subject.subscribe(
        // Called whenever there is a message from the server.
        function (msg) {
            console.log("chat.service received", msg);
            _this.onData(msg);
            //this.messageSubject.next("hello");
        }, 
        // Called if at any point WebSocket API signals some kind of error.
        function (err) {
            console.warn('socket error:', err);
            // reconnect
        }, 
        // Called when connection is closed (for whatever reason).
        function () {
            console.warn('connection closed');
        });
        /*this.messages = <Subject<Message>>wsService.connect(CHAT_URL).map(
            (response: MessageEvent): Message => {
                let data = JSON.parse(response.data);
                return {
                    author: data.author,
                    message: data.message
                };
            }
        );*/
    }
    ChatService.prototype.postTest = function () {
        var _this = this;
        var token = localStorage.getItem('token');
        var data = {
            server_id: 1,
            test: "yes",
            token: token,
            csrfmiddlewaretoken: token
        };
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        this.http.post(this.rootUrl + '/api-token-auth/', { username: "Golen", password: "1234" }, httpOptions)
            .subscribe(function (result) {
            console.log('/api-token-auth/ success:', result);
            localStorage.setItem("token", result.token);
            // (1) --------
            _this.http.post(_this.rootUrl + '/api-token-refresh/', { token: localStorage.getItem("token") }, httpOptions)
                .subscribe(function (result) {
                console.log('/api-token-refresh/ success:', result);
                localStorage.setItem("token", result.token);
                // (2) --------
                var res = _this.http.post(_this.rootUrl + '/fetch_server_users/', JSON.stringify({ server_id: _this.selectedServerId }), httpOptions)
                    .subscribe(function (res) {
                    console.log("Success!", res);
                    return res;
                });
                // (2) --------
            });
            // (1) --------
        });
    };
    Object.defineProperty(ChatService.prototype, "messages", {
        get: function () {
            return this.messageList[this.selectedServerId];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChatService.prototype, "onMessage$", {
        get: function () {
            return this.messageSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    ChatService.prototype.sendMessage = function (message) {
        this.wsService.send({
            "type": "message",
            "server_id": this.selectedServerId,
            "content": message
        });
    };
    // TODO: Move to service?
    ChatService.prototype.getUserName = function (user_id) {
        return "Name#" + user_id;
    };
    ChatService.prototype.getUserImage = function (user_id) {
        var url = "http://identicon.org/?t={id}&s=256";
        url = url.replace("{id}", user_id);
        //url = url.replace("{size}", Math.max(element.width, element.height));
        return url;
    };
    ChatService.prototype.onData = function (message) {
        var type = message.type;
        if (type == 'message') {
            this.onMessage(message);
        }
        else if (type == 'join') {
            this.onJoin(message);
        }
        else if (type == 'leave') {
            this.onLeave(message);
        }
    };
    ChatService.prototype.onMessage = function (message) {
        var type = message.type;
        var server_id = message.server_id;
        var author = this.getUserName(message.user_id);
        var msg_id = message.msg_id;
        var timestamp = message.timestamp;
        var content = message.content || "<content>";
        var image = this.getUserImage(message.user_id);
        this.messageList[server_id].push({
            type: type,
            author: author,
            msg_id: msg_id,
            image: image,
            timestamp: timestamp,
            content: content,
        });
    };
    ChatService.prototype.onJoin = function (message) {
        var type = message.type;
        var server_id = message.server_id;
        var author = this.getUserName(message.user_id);
        var msg_id = message.msg_id;
        var timestamp = message.timestamp;
        this.messageList[server_id].push({
            type: type,
            author: author,
            msg_id: msg_id,
            timestamp: timestamp,
        });
    };
    ChatService.prototype.onLeave = function (message) {
        var type = message.type;
        var server_id = message.server_id;
        var author = this.getUserName(message.user_id);
        var msg_id = message.msg_id;
        var timestamp = message.timestamp;
        this.messageList[server_id].push({
            type: type,
            author: author,
            msg_id: msg_id,
            timestamp: timestamp,
        });
    };
    ChatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_websocket_service__WEBPACK_IMPORTED_MODULE_4__["WebsocketService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "./src/app/create-room-form/create-room-form.component.html":
/*!******************************************************************!*\
  !*** ./src/app/create-room-form/create-room-form.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\n\t<div class=\"modal-header\">\n\t\t<h4 class=\"modal-title\" id=\"modal-basic-title\">Create Your Server</h4>\n\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss()\">\n\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t</button>\n\t</div>\n\n\t<form\n\t\tngNativeValidate\n\t\t#createServerForm=\"ngForm\"\n\t\t(ngSubmit)=\"onSubmit(createServerForm)\">\n\t\t<div class=\"modal-body\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"serverName\">Server name</label>\n\t\t\t\t<input\n\t\t\t\t\tngModel\n\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t#serverName\n\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\tid=\"serverName\"\n\t\t\t\t\tname=\"serverName\"\n\t\t\t\t\tautocomplete=\"off\"\n\t\t\t\t\tplaceholder=\"Server name\"\n\t\t\t\t\tngbAutofocus\n\t\t\t\t\trequired>\n\t\t\t</div>\n\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"serverType\">Server type</label>\n\t\t\t\t<select class=\"form-control\" id=\"serverType\" required>\n\t\t\t\t\t<option *ngFor=\"let type of serverTypes\" [value]=\"type\">{{type}}</option>\n\t\t\t\t</select>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"modal-footer\">\n\t\t\t<button\n\t\t\t\ttype=\"submit\"\n\t\t\t\tclass=\"btn btn-outline-dark\">Create</button>\n\t\t</div>\n\t</form>\n\n</div>"

/***/ }),

/***/ "./src/app/create-room-form/create-room-form.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/create-room-form/create-room-form.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS1yb29tLWZvcm0vY3JlYXRlLXJvb20tZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/create-room-form/create-room-form.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/create-room-form/create-room-form.component.ts ***!
  \****************************************************************/
/*! exports provided: CreateRoomFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateRoomFormComponent", function() { return CreateRoomFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");




var CreateRoomFormComponent = /** @class */ (function () {
    function CreateRoomFormComponent(activeModal, data) {
        this.activeModal = activeModal;
        this.data = data;
        this.serverTypes = ['Private', 'Group'];
    }
    CreateRoomFormComponent.prototype.ngOnInit = function () { };
    CreateRoomFormComponent.prototype.onSubmit = function (formData) {
        var name = formData.form.value.serverName;
        this.data.createServer().subscribe(function (data) {
            console.log('Create Server:', data);
        });
        this.activeModal.close();
    };
    CreateRoomFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-room-form',
            template: __webpack_require__(/*! ./create-room-form.component.html */ "./src/app/create-room-form/create-room-form.component.html"),
            styles: [__webpack_require__(/*! ./create-room-form.component.scss */ "./src/app/create-room-form/create-room-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"],
            _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], CreateRoomFormComponent);
    return CreateRoomFormComponent;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getUsers = function () {
        return this.http.get('https://jsonplaceholder.typicode.com/users');
    };
    DataService.prototype.getUser = function (userId) {
        return this.http.get('https://jsonplaceholder.typicode.com/users/' + userId);
    };
    DataService.prototype.getPosts = function () {
        return this.http.get('https://jsonplaceholder.typicode.com/posts');
    };
    DataService.prototype.createServer = function () {
        return this.http.get('http://localhost:8000/chat');
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/details/details.component.html":
/*!************************************************!*\
  !*** ./src/app/details/details.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user$\">\n\t<h1>{{ user$.name }}</h1>\n\n\t<ul>\n\t\t <li><strong>Username:</strong> {{ user$.username }}</li>\n\t\t<li><strong>Email:</strong> {{ user$.email }}</li>\n\t\t<li><strong>Phone:</strong> {{ user$.phone }}</li>\n\t</ul>\n</div>"

/***/ }),

/***/ "./src/app/details/details.component.scss":
/*!************************************************!*\
  !*** ./src/app/details/details.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbHMvZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/details/details.component.ts":
/*!**********************************************!*\
  !*** ./src/app/details/details.component.ts ***!
  \**********************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(data, route) {
        var _this = this;
        this.data = data;
        this.route = route;
        this.route.params.subscribe(function (params) {
            _this.user$ = params.id;
            console.log(params);
        });
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getUser(this.user$).subscribe(function (data) { return _this.user$ = data; });
    };
    DetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! ./details.component.html */ "./src/app/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.scss */ "./src/app/details/details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/posts/posts.component.html":
/*!********************************************!*\
  !*** ./src/app/posts/posts.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Posts</h1>\n\n<ul>\n\t<li *ngFor=\"let post of posts$\">\n\t\t<a routerLink=\"\">{{ post.title }}</a>\n\n\t\t<p>{{ post.body }}</p>\n\t</li>\n</ul>"

/***/ }),

/***/ "./src/app/posts/posts.component.scss":
/*!********************************************!*\
  !*** ./src/app/posts/posts.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzL3Bvc3RzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/posts/posts.component.ts":
/*!******************************************!*\
  !*** ./src/app/posts/posts.component.ts ***!
  \******************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");



var PostsComponent = /** @class */ (function () {
    function PostsComponent(data) {
        this.data = data;
    }
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getPosts().subscribe(function (data) { return _this.posts$ = data; });
    };
    PostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-posts',
            template: __webpack_require__(/*! ./posts.component.html */ "./src/app/posts/posts.component.html"),
            styles: [__webpack_require__(/*! ./posts.component.scss */ "./src/app/posts/posts.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], PostsComponent);
    return PostsComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n\t<ul>\n\t\t<li *ngFor=\"let server of serverList\">\n\t\t\t<a routerLink=\"/chat/{{ server.id }}\">\n\t\t\t\t{{server.name}}\n\t\t\t</a>\n\n\t\t\t<!--\n\t\t\t<a routerLink=\"server\" [class.activated]=\"currentUrl == '/chat'\" style=\"padding: 0;\">\n\t\t\t\t<div class=\"d-flex align-items-center bg-secondary rounded-circle mx-auto\" style=\"width: 60px; height: 60px;\">\n\t\t\t\t\t<h4 class=\"font-weight-bold mx-auto my-0\">MG</h4>\n\t\t\t\t</div>\n\t\t\t</a>\n\t\t\t<a routerLink=\"\">\n\t\t\t\t<div>\n\t\t\t\t\t<i class=\"material-icons\">chat</i>\n\t\t\t\t\t<h5 class=\"font-weight-bold mx-auto my-0\">{{server}}</h5>\n\t\t\t\t</div>\n\t\t\t</a>\n\t\t\t-->\n\t\t</li>\n\t\t<!--\n\t\t<li>\n\t\t\t<a routerLink=\"\" [class.activated]=\"currentUrl == '/'\">\n\t\t\t\t<div>\n\t\t\t\t\t<i class=\"material-icons\">chat</i>\n\t\t\t\t</div>\n\t\t\t</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a routerLink=\"posts\" [class.activated]=\"currentUrl == '/posts'\">\n\t\t\t\t<i class=\"material-icons\">assignment</i>\n\t\t\t</a>\n\t\t</li>\n\t\t-->\n\t\t<li>\n\t\t\t<a routerLink=\"users\" [class.activated]=\"currentUrl == '/users'\">\n\t\t\t\t<i class=\"material-icons\">people</i>\n\t\t\t</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a (click)=\"openCreateRoomModal()\">\n\t\t\t\t<i class=\"material-icons\">add_box</i>\n\t\t\t</a>\n\t\t</li>\n\n\t\t<hr style=\"border-top: 1px solid gray;\">\n\t\n\t\t<li>\n\t\t\t<a (click)=\"openLoginModal()\">\n\t\t\t\t<i class=\"material-icons\">vpn_key</i>\n\t\t\t</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a (click)=\"openSignupModal()\">\n\t\t\t\t<i class=\"material-icons\">assignment_ind</i>\n\t\t\t</a>\n\t\t</li>\n\t</ul>\n</nav>"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.scss":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\n  background: #2D2E2E;\n  height: 100%; }\n  nav ul {\n    list-style-type: none;\n    padding: 0;\n    margin: 0; }\n  nav ul li a {\n      color: #fff;\n      padding: 20px;\n      display: block;\n      vertical-align: text-bottom;\n      cursor: pointer; }\n  nav ul li .activated {\n      background-color: #00a8ff; }\n  nav ul li:hover {\n      background: #5D5E5E; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dvbGVuL0Vza29sYXBwL2Vza29sYXBwL2Zyb250ZW5kL2FuZ3VsYXIvc3JjL2FwcC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBbUI7RUFDbkIsWUFBWSxFQUFBO0VBRmhCO0lBS1EscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixTQUFTLEVBQUE7RUFQakI7TUFZZ0IsV0FBVztNQUNYLGFBQWE7TUFDYixjQUFjO01BQ2QsMkJBQTJCO01BQzNCLGVBQWUsRUFBQTtFQWhCL0I7TUFvQmdCLHlCQUF5QixFQUFBO0VBcEJ6QztNQXlCWSxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdiB7XG4gICAgYmFja2dyb3VuZDogIzJEMkUyRTtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICB1bCB7XG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuXG4gICAgICAgIGxpIHtcblxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYWN0aXZhdGVkIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhOGZmO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGk6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzVENUU1RTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbn0iXX0= */"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../authentication/login/login.component */ "./src/app/authentication/login/login.component.ts");
/* harmony import */ var _authentication_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../authentication/signup/signup.component */ "./src/app/authentication/signup/signup.component.ts");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../chat.service */ "./src/app/chat.service.ts");








var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(router, modalService, chatService) {
        var _this = this;
        this.router = router;
        this.modalService = modalService;
        this.chatService = chatService;
        router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (e) { return e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; }))
            .subscribe(function (event) {
            _this.currentUrl = event.url;
        });
        //console.log("Servers:", chatService.serverList);
    }
    SidebarComponent.prototype.ngOnInit = function () { };
    SidebarComponent.prototype.openCreateRoomModal = function () {
        this.chatService.postTest();
        //this.modalService.open(CreateRoomFormComponent);
    };
    SidebarComponent.prototype.openLoginModal = function () {
        this.modalService.open(_authentication_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]);
    };
    SidebarComponent.prototype.openSignupModal = function () {
        this.modalService.open(_authentication_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"]);
    };
    Object.defineProperty(SidebarComponent.prototype, "serverList", {
        get: function () {
            return this.chatService.serverList;
        },
        enumerable: true,
        configurable: true
    });
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/sidebar/sidebar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"], _chat_service__WEBPACK_IMPORTED_MODULE_7__["ChatService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/users/users.component.html":
/*!********************************************!*\
  !*** ./src/app/users/users.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Users</h1>\n\n<ul [@listStagger]=\"users$\">\n\t<li *ngFor=\"let user of users$\">\n\t\t<a routerLink=\"/details/{{ user.id }}\">{{ user.name }}</a>\n\n\t\t<ul>\n\t\t\t<li>{{ user.name }}</li>\n\t\t\t<li><a href=\"http://{{ user.website }}\">{{ user.website }}</a></li>\n\t\t</ul>\n\t</li>\n</ul>"

/***/ }),

/***/ "./src/app/users/users.component.scss":
/*!********************************************!*\
  !*** ./src/app/users/users.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/users/users.component.ts":
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");




var UsersComponent = /** @class */ (function () {
    function UsersComponent(data) {
        this.data = data;
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getUsers().subscribe(function (data) { return _this.users$ = data; });
    };
    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/users/users.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('listStagger', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* <=> *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["query"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0, transform: 'translateY(-15px)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["stagger"])('50ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('550ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 1, transform: 'translateY(0px)' })))
                        ], { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('50ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0 })), {
                            optional: true
                        })
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./users.component.scss */ "./src/app/users/users.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/websocket.service.ts":
/*!**************************************!*\
  !*** ./src/app/websocket.service.ts ***!
  \**************************************/
/*! exports provided: WebsocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsocketService", function() { return WebsocketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_observable_dom_WebSocketSubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/observable/dom/WebSocketSubject */ "./node_modules/rxjs-compat/_esm5/observable/dom/WebSocketSubject.js");



//const CHAT_URL = "ws://echo.websocket.org/";
var CHAT_URL = "ws://localhost:8000/ws/chat/test/";
var WebsocketService = /** @class */ (function () {
    function WebsocketService() {
    }
    Object.defineProperty(WebsocketService.prototype, "subject", {
        get: function () {
            this.url = CHAT_URL;
            var closed = !this._subject || this._subject.closed;
            if (closed) {
                //this._subject = this.create(this.url);
                this._subject = new rxjs_observable_dom_WebSocketSubject__WEBPACK_IMPORTED_MODULE_2__["WebSocketSubject"](this.url);
                console.log("Connected!");
            }
            return this._subject;
        },
        enumerable: true,
        configurable: true
    });
    /*
    get onMessage$(): Observable<MessageEvent> {
        return this.subject.asObservable();
    }
    */
    WebsocketService.prototype.send = function (data) {
        this.subject.next(data);
    };
    WebsocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WebsocketService);
    return WebsocketService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/golen/Eskolapp/eskolapp/frontend/angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map