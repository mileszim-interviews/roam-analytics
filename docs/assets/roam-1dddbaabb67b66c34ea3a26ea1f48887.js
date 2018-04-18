"use strict"
define("roam/app",["exports","roam/resolver","ember-load-initializers","roam/config/environment"],function(e,t,a,n){Object.defineProperty(e,"__esModule",{value:!0})
var o=Ember.Application.extend({modulePrefix:n.default.modulePrefix,podModulePrefix:n.default.podModulePrefix,Resolver:t.default});(0,a.default)(o,n.default.modulePrefix),e.default=o}),define("roam/controllers/index",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Controller.extend({stateFilter:"",query:Ember.computed("stateFilter",function(){return this.get("stateFilter").toLowerCase()||""}),filteredStates:Ember.computed("model.[]","query",function(){var e=this.getProperties("model","query"),t=e.model,a=e.query
return t.filter(function(e){return e.state.toLowerCase().includes(a)})}),filteredStatesCountArray:Ember.computed.mapBy("filteredStates","count"),total:Ember.computed.sum("filteredStatesCountArray")})}),define("roam/helpers/app-version",["exports","roam/config/environment","ember-cli-app-version/utils/regexp"],function(e,t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=o
var n=t.default.APP.version
function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return t.hideSha?n.match(a.versionRegExp)[0]:t.hideVersion?n.match(a.shaRegExp)[0]:n}e.default=Ember.Helper.helper(o)}),define("roam/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("roam/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("roam/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","roam/config/environment"],function(e,t,a){Object.defineProperty(e,"__esModule",{value:!0})
var n=void 0,o=void 0
a.default.APP&&(n=a.default.APP.name,o=a.default.APP.version),e.default={name:"App Version",initialize:(0,t.default)(n,o)}}),define("roam/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("roam/initializers/ember-data",["exports","ember-data/setup-container","ember-data"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ember-data",initialize:t.default}}),define("roam/initializers/export-application-global",["exports","roam/config/environment"],function(e,t){function a(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var a
if("undefined"!=typeof window)a=window
else if("undefined"!=typeof global)a=global
else{if("undefined"==typeof self)return
a=self}var n,o=t.default.exportApplicationGlobal
n="string"==typeof o?o:Ember.String.classify(t.default.modulePrefix),a[n]||(a[n]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete a[n]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=a,e.default={name:"export-application-global",initialize:a}}),define("roam/instance-initializers/ember-data",["exports","ember-data/initialize-store-service"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ember-data",initialize:t.default}}),define("roam/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("roam/router",["exports","roam/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0})
var a=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
a.map(function(){}),e.default=a}),define("roam/routes/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Route.extend({})}),define("roam/routes/index",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Route.extend({model:function(){return[{state:"Alabama",count:2843},{state:"Alaska",count:433},{state:"Arizona",count:932},{state:"Arkansas",count:294},{state:"California",count:5394},{state:"Colorado",count:1944},{state:"Connecticut",count:980},{state:"Delaware",count:28},{state:"Florida",count:1740},{state:"Georgia",count:837},{state:"Hawaii",count:462},{state:"Idaho",count:70},{state:"Illinois",count:362},{state:"Indiana",count:739},{state:"Iowa",count:253},{state:"Kansas",count:329},{state:"Kentucky",count:940},{state:"Louisiana",count:263},{state:"Maine",count:823},{state:"Maryland",count:780},{state:"Massachusetts",count:274},{state:"Michigan",count:983},{state:"Minnesota",count:274},{state:"Mississippi",count:1308},{state:"Missouri",count:284},{state:"Montana",count:904},{state:"Nebraska",count:274},{state:"Nevada",count:190},{state:"New Hampshire",count:278},{state:"New Jersey",count:402},{state:"New Mexico",count:943},{state:"New York",count:2948},{state:"North Carolina",count:383},{state:"North Dakota",count:139},{state:"Ohio",count:389},{state:"Oklahoma",count:392},{state:"Oregon",count:409},{state:"Pennsylvania",count:893},{state:"Rhode Island",count:194},{state:"South Carolina",count:87},{state:"South Dakota",count:158},{state:"Tennessee",count:93},{state:"Texas",count:3078},{state:"Utah",count:563},{state:"Vermont",count:183},{state:"Virginia",count:394},{state:"Washington",count:1303},{state:"West Virginia",count:692},{state:"Wisconsin",count:492},{state:"Wyoming",count:673}]}})}),define("roam/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("roam/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"qmOe2Q5L",block:'{"symbols":[],"statements":[[1,[18,"outlet"],false]],"hasEval":false}',meta:{moduleName:"roam/templates/application.hbs"}})}),define("roam/templates/index",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"OkhbSSuN",block:'{"symbols":["stateObj"],"statements":[[6,"div"],[9,"class","container"],[7],[0,"\\n  "],[6,"div"],[9,"class","inner-container"],[7],[0,"\\n    "],[1,[25,"input",null,[["type","value"],["text",[20,["stateFilter"]]]]],false],[0,"\\n\\n    "],[6,"table"],[7],[0,"\\n      "],[6,"tbody"],[7],[0,"\\n"],[4,"each",[[20,["filteredStates"]]],null,{"statements":[[0,"        "],[6,"tr"],[7],[0,"\\n          "],[6,"td"],[7],[1,[19,1,["state"]],false],[8],[0,"\\n          "],[6,"td"],[7],[1,[19,1,["count"]],false],[8],[0,"\\n        "],[8],[0,"\\n"]],"parameters":[1]},null],[0,"        "],[6,"tr"],[9,"class","total"],[7],[0,"\\n          "],[6,"td"],[7],[6,"strong"],[7],[0,"Total"],[8],[8],[0,"\\n          "],[6,"td"],[7],[1,[18,"total"],false],[8],[0,"\\n        "],[8],[0,"\\n      "],[8],[0,"\\n    "],[8],[0,"\\n  "],[8],[0,"\\n"],[8],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"roam/templates/index.hbs"}})}),define("roam/config/environment",[],function(){try{var e="roam/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),a={default:JSON.parse(unescape(t))}
return Object.defineProperty(a,"__esModule",{value:!0}),a}catch(t){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("roam/app").default.create({name:"roam",version:"0.0.0+f2df1840"})