(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-571535b8"],{"0bd0":function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("notification-channel-template",{attrs:{errorMessages:t.errorMessages,saving:t.saving,notificationChannel:t.notificationChannel,notificationSettings:t.notificationSettings},on:{updateNotificationChannel:function(i,e){return t.$emit("updateNotificationChannel",i,e)},deleteNotificationChannel:function(i){return t.$emit("deleteNotificationChannel",i)},clearErrorMessages:function(i){return t.$emit("clearErrorMessages",i)}},scopedSlots:t._u([{key:"configuration",fn:function(){return[e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-12 col-form-label",attrs:{for:"id_email"}},[t._v("Phone Number")]),e("div",{staticClass:"col-12 col-form-label"},[e("saving-animation",{attrs:{errors:t.errorMessages[t.settingKey("config")],saving:t.saving[t.settingKey("config")]}},[e("div",{staticClass:"form-group form-row"},[e("div",{staticClass:"col-sm-6 col-md-4 mb-2 mb-sm-0"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.phoneCountryCode,expression:"phoneCountryCode"}],staticClass:"form-control",attrs:{type:"text",id:"id_phone_code",placeholder:"Country Code"},domProps:{value:t.phoneCountryCode},on:{input:function(i){i.target.composing||(t.phoneCountryCode=i.target.value)}}})]),e("div",{staticClass:"col-sm-6 col-md-8"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.phoneNumber,expression:"phoneNumber"}],staticClass:"form-control",attrs:{type:"text",id:"id_phone_number",placeholder:"Phone Number"},domProps:{value:t.phoneNumber},on:{input:function(i){i.target.composing||(t.phoneNumber=i.target.value)}}})])])])],1)])]},proxy:!0}])})},o=[],a=(e("caad"),e("ac1f"),e("2532"),e("5319"),e("847e")),s=e("9897"),r=e("b279"),c={name:"twilio",components:{SavingAnimation:a["a"],NotificationChannelTemplate:s["a"]},props:{errorMessages:{type:Object,required:!0},saving:{type:Object,required:!0},user:{type:Object,required:!0},notificationChannel:{type:Object,required:!0},config:{default:function(){return{}},type:Object}},data:function(){return{notificationSettings:[{id:"notify_on_failure_alert",title:"Failure alerts",description:"When possible failures are detected"}],configUpdateTimeout:null,phoneCountryCode:null,phoneNumber:null}},created:function(){this.notificationChannel.channelInfo&&this.notificationChannel.channelInfo.config&&(this.phoneCountryCode=this.notificationChannel.channelInfo.config.phone_country_code,this.phoneNumber=this.notificationChannel.channelInfo.config.phone_number)},watch:{phoneCountryCode:function(t,i){if(null!==i)if(this.$emit("clearErrorMessages",this.settingKey("config")),""!==t){var e=parseInt(t.replace(/\s/g,""));isNaN(e)||(this.config.twilioCountryCodes&&0!==this.config.twilioCountryCodes.length&&!this.config.twilioCountryCodes.includes(e)?this.$emit("addErrorMessage",this.settingKey("config"),"Oops, we don't send SMS to this country code"):this.phoneNumber&&this.updateConfig())}else""===this.phoneNumber&&this.updateConfig()},phoneNumber:function(t,i){null!==i&&(this.$emit("clearErrorMessages",this.settingKey("config")),""!==t?this.phoneCountryCode&&this.updateConfig():""===this.phoneCountryCode&&this.updateConfig())}},methods:{settingKey:function(t){return Object(r["b"])(this.notificationChannel,t)},updateConfig:function(){var t=this;this.configUpdateTimeout&&clearTimeout(this.configUpdateTimeout);var i={phone_country_code:this.phoneCountryCode,phone_number:this.phoneNumber};this.notificationChannel.channelInfo?this.configUpdateTimeout=setTimeout((function(){t.notificationChannel.channelInfo.config=i,t.$emit("updateNotificationChannel",t.notificationChannel,["config"])}),1e3):this.configUpdateTimeout=setTimeout((function(){t.$emit("createNotificationChannel",t.notificationChannel,i,{notify_on_print_done:"f",notify_on_print_cancelled:"f",notify_on_filament_change:"f",notify_on_other_print_events:"f",notify_on_heater_status:"f"})}),1e3)}}},l=c,f=e("2877"),d=Object(f["a"])(l,n,o,!1,null,null,null);i["default"]=d.exports},"2e96":function(t,i,e){},"41dc":function(t,i,e){"use strict";var n=e("2e96"),o=e.n(n);o.a},"6e09":function(t,i,e){"use strict";var n=e("9960"),o=e.n(n);o.a},9897:function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("section",[e("h2",{staticClass:"section-title"},[t._v(t._s(t.notificationChannel.title))]),0===t.envVarsToSet.length?e("div",[t._t("header"),t._t("configuration",[t.configVariableName?e("div",{staticClass:"form-group row my-4"},[e("label",{staticClass:"col-12 col-form-label",attrs:{for:"id_"+t.settingKey(t.configVariableName)}},[t._v(t._s(t.configVariableTitle))]),e("div",{staticClass:"col-12 col-form-label"},[e("saving-animation",{attrs:{errors:t.errorMessages[t.settingKey("config")],saving:t.saving[t.settingKey("config")]}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.configVariable,expression:"configVariable"}],staticClass:"form-control",attrs:{type:"text",placeholder:t.configVariablePlaceholder,id:"id_"+t.settingKey(t.configVariableName)},domProps:{value:t.configVariable},on:{input:function(i){i.target.composing||(t.configVariable=i.target.value)}}})])],1)]):t._e()]),t.channelCreated&&t.showSettings?e("div",[e("notification-setting-switch",{attrs:{settingId:"enabled",settingTitle:"Enable notification",isHeader:!0,errorMessages:t.errorMessages,saving:t.saving,notificationChannel:t.notificationChannel,bottomDivider:!0},on:{updateNotificationChannel:function(i,e){return t.$emit("updateNotificationChannel",i,e)}}}),e("div",{class:{inactive:!t.notificationsEnabled}},[t._t("custom-settings"),t._l(t.notificationSettings,(function(i){return e("div",{key:i.id},["print_job"===i.id?["web"===t.theme?e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-form-label"},[e("saving-animation",{attrs:{errors:[],saving:!1}},[e("div",{staticClass:"custom-control custom-checkbox form-check-inline"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.printerStatusChangeNotifications,expression:"printerStatusChangeNotifications"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"id_"+t.settingKey(i.id),disabled:!t.notificationsEnabled},domProps:{checked:Array.isArray(t.printerStatusChangeNotifications)?t._i(t.printerStatusChangeNotifications,null)>-1:t.printerStatusChangeNotifications},on:{change:function(i){var e=t.printerStatusChangeNotifications,n=i.target,o=!!n.checked;if(Array.isArray(e)){var a=null,s=t._i(e,a);n.checked?s<0&&(t.printerStatusChangeNotifications=e.concat([a])):s>-1&&(t.printerStatusChangeNotifications=e.slice(0,s).concat(e.slice(s+1)))}else t.printerStatusChangeNotifications=o}}}),e("label",{staticClass:"custom-control-label",attrs:{for:"id_"+t.settingKey(i.id)}},[t._v(" "+t._s(i.title)+" "),i.description?e("span",{staticClass:"text-muted setting-description"},[e("br"),t._v(t._s(i.description))]):t._e()])])])],1)]):e("div",[e("saving-animation",{attrs:{errors:[],saving:!1}},[e("div",{staticClass:"mobile-setting-item-wrapper"},[e("div",{staticClass:"setting-item-text"},[e("label",{attrs:{for:"id_"+t.settingKey(i.id)}},[t._v(" "+t._s(i.title)+" "),i.description?e("span",{staticClass:"text-muted setting-description"},[e("br"),t._v(t._s(i.description))]):t._e()])]),e("div",{staticClass:"setting-item-switch"},[e("onoff-toggle",{staticClass:"mb-0",attrs:{theme:t.theme,width:"ios"===t.theme?48:30,height:"ios"===t.theme?24:12,onColor:"ios"===t.theme?"var(--color-primary)":"var(--color-primary-muted)",offColor:"var(--color-divider)",borderColor:"var(--color-divider)",thumbColor:"ios"===t.theme?"#fff":"var(--color-primary)",disabled:!t.notificationsEnabled},model:{value:t.printerStatusChangeNotifications,callback:function(i){t.printerStatusChangeNotifications=i},expression:"printerStatusChangeNotifications"}})],1)])])],1)]:[e("notification-setting-switch",{attrs:{settingId:i.id,settingTitle:i.title,settingDescription:i.description,disabled:!t.notificationsEnabled,errorMessages:t.errorMessages,saving:t.saving,notificationChannel:t.notificationChannel},on:{updateNotificationChannel:function(i,e){return t.$emit("updateNotificationChannel",i,e)}}})],i.subcategories?e("div",t._l(i.subcategories,(function(i){return e("notification-setting-switch",{key:i.id,attrs:{settingId:i.id,settingTitle:i.title,settingDescription:i.description,isSubcategory:!0,disabled:!t.notificationsEnabled,errorMessages:t.errorMessages,saving:t.saving,notificationChannel:t.notificationChannel},on:{updateNotificationChannel:function(i,e){return t.$emit("updateNotificationChannel",i,e)}}})})),1):t._e()],2)}))],2)],1):t._e(),t._t("footer")],2):e("div",[e("p",{staticClass:"text-warning"},[t._v('Please configure the following variables in the ".env" file:')]),e("ul",{staticClass:"text-warning"},t._l(t.envVarsToSet,(function(i){return e("li",{key:i},[t._v(t._s(i))])})),0)])])},o=[],a=(e("4de4"),e("4fad"),e("fc11")),s=e("54f8"),r=e("d0af"),c=e("847e"),l=function(){var t=this,i=t.$createElement,e=t._self._c||i;return"web"===t.theme?e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-form-label",class:{"pl-5":t.isSubcategory}},[e("saving-animation",{attrs:{errors:t.errorMessages?t.errorMessages[t.settingKey(t.settingId)]:[],saving:!!t.saving&&t.saving[t.settingKey(t.settingId)]}},[e("div",{staticClass:"custom-control custom-checkbox form-check-inline"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.notificationChannel.channelInfo[t.settingId],expression:"notificationChannel.channelInfo[settingId]"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"id_"+t.settingKey(t.settingId),disabled:t.disabled},domProps:{checked:Array.isArray(t.notificationChannel.channelInfo[t.settingId])?t._i(t.notificationChannel.channelInfo[t.settingId],null)>-1:t.notificationChannel.channelInfo[t.settingId]},on:{change:[function(i){var e=t.notificationChannel.channelInfo[t.settingId],n=i.target,o=!!n.checked;if(Array.isArray(e)){var a=null,s=t._i(e,a);n.checked?s<0&&t.$set(t.notificationChannel.channelInfo,t.settingId,e.concat([a])):s>-1&&t.$set(t.notificationChannel.channelInfo,t.settingId,e.slice(0,s).concat(e.slice(s+1)))}else t.$set(t.notificationChannel.channelInfo,t.settingId,o)},function(i){return t.$emit("updateNotificationChannel",t.notificationChannel,[t.settingId])}]}}),e("label",{class:["custom-control-label",t.labelClass],attrs:{for:"id_"+t.settingKey(t.settingId)}},[t._v(" "+t._s(t.settingTitle)+" "),t.settingDescription?e("span",{staticClass:"text-muted setting-description"},[e("br"),t._v(t._s(t.settingDescription))]):t._e()])])])],1),t.bottomDivider?e("div",{staticClass:"col-12"},[e("hr",{staticClass:"my-1"})]):t._e()]):e("div",[e("saving-animation",{attrs:{errors:t.errorMessages?t.errorMessages[t.settingKey(t.settingId)]:[],saving:!!t.saving&&t.saving[t.settingKey(t.settingId)]}},[e("div",{staticClass:"mobile-setting-item-wrapper",class:{"is-subcategory":t.isSubcategory}},[e("div",{staticClass:"setting-item-text"},[e("label",{class:t.labelClass,attrs:{for:"id_"+t.settingKey(t.settingId)}},[t._v(" "+t._s(t.settingTitle)+" "),t.settingDescription?e("span",{staticClass:"text-muted setting-description"},[e("br"),t._v(t._s(t.settingDescription))]):t._e()])]),e("div",{staticClass:"setting-item-switch"},[e("onoff-toggle",{staticClass:"mb-0",attrs:{theme:t.theme,width:"ios"===t.theme?48:30,height:"ios"===t.theme?24:12,onColor:"ios"===t.theme?"var(--color-primary)":"var(--color-primary-muted)",offColor:"var(--color-divider)",borderColor:"var(--color-divider)",thumbColor:"ios"===t.theme?"#fff":"var(--color-primary)",disabled:t.disabled},on:{input:function(i){return t.$emit("updateNotificationChannel",t.notificationChannel,[t.settingId])}},model:{value:t.notificationChannel.channelInfo[t.settingId],callback:function(i){t.$set(t.notificationChannel.channelInfo,t.settingId,i)},expression:"notificationChannel.channelInfo[settingId]"}})],1)])])],1)},f=[],d=e("b279"),h=e("4f95"),u={name:"NotificationSettingSwitch",components:{SavingAnimation:c["a"]},props:{errorMessages:{type:Object||null,default:null},saving:{type:Object||null,default:null},notificationChannel:{type:Object,required:!0},settingId:{type:String,required:!0},settingTitle:{type:String,required:!0},settingDescription:{type:String},isSubcategory:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},bottomDivider:{type:Boolean,default:!1},isHeader:{type:Boolean,default:!1}},computed:{theme:function(){var t=Object(h["b"])();return t?"ios"===t?"ios":"material":"web"},labelClass:function(){return this.isHeader?"lg":""}},methods:{settingKey:function(t){return Object(d["b"])(this.notificationChannel,t)}}},g=u,p=(e("41dc"),e("2877")),m=Object(p["a"])(g,l,f,!1,null,"06fd8ffb",null),C=m.exports,b=[{id:"notify_on_failure_alert",title:"Failure alerts",description:"When possible failures are detected"},{id:"print_job",title:"Print job events",description:"Upon start/end/cancellation of a print job",subcategories:[{id:"notify_on_print_done",title:"When print is done",enabledByDefault:!0},{id:"notify_on_print_cancelled",title:"When print is cancelled",enabledByDefault:!1},{id:"notify_on_filament_change",title:"When filament runs out or needs a change",enabledByDefault:!0},{id:"notify_on_other_print_events",title:"When other event happens",description:"Such as start, pause, and resume",enabledByDefault:!1}]},{id:"notify_on_heater_status",title:"Heater status change",description:"Heater reached target or cooled down"}],v={name:"NotificationChannelTemplate",components:{SavingAnimation:c["a"],NotificationSettingSwitch:C},props:{errorMessages:{type:Object,required:!0},saving:{type:Object,required:!0},notificationChannel:{type:Object,required:!0},notificationSettings:{type:Array,default:function(){return b}},showSettings:{type:Boolean,default:!0},configVariableTitle:{type:String},configVariablePlaceholder:{type:String},configVariableName:{type:String}},data:function(){return{configVariable:null,configUpdateTimeout:null}},computed:{channelCreated:function(){return!!this.notificationChannel.channelInfo},notificationsEnabled:function(){return!!this.notificationChannel.channelInfo&&this.notificationChannel.channelInfo.enabled},envVarsToSet:function(){for(var t,i=(null===(t=this.notificationChannel.pluginInfo)||void 0===t?void 0:t.env_vars)||{},e=[],n=0,o=Object.entries(i);n<o.length;n++){var a=Object(r["a"])(o[n],2),s=a[0],c=a[1];c.is_required&&!c.is_set&&e.push(s)}return e},printerStatusChangeNotifications:{get:function(){if(!this.notificationChannel.channelInfo)return null;var t,i=this.notificationSettings.filter((function(t){return"print_job"===t.id}))[0].subcategories,e=Object(s["a"])(i);try{for(e.s();!(t=e.n()).done;){var n=t.value;if(this.notificationChannel.channelInfo[n.id])return!0}}catch(o){e.e(o)}finally{e.f()}return!1},set:function(t){if(t){var i,e=this.notificationSettings.filter((function(t){return"print_job"===t.id}))[0].subcategories,n=[],o=Object(s["a"])(e);try{for(o.s();!(i=o.n()).done;){var a=i.value;a.enabledByDefault&&(this.notificationChannel.channelInfo[a.id]=!0,n.push(a.id))}}catch(h){o.e(h)}finally{o.f()}n.length&&this.$emit("updateNotificationChannel",this.notificationChannel,n)}else{var r,c=this.notificationSettings.filter((function(t){return"print_job"===t.id}))[0].subcategories,l=[],f=Object(s["a"])(c);try{for(f.s();!(r=f.n()).done;){var d=r.value;this.notificationChannel.channelInfo[d.id]&&(this.notificationChannel.channelInfo[d.id]=!1,l.push(d.id))}}catch(h){f.e(h)}finally{f.f()}l.length&&this.$emit("updateNotificationChannel",this.notificationChannel,l)}}},theme:function(){var t=Object(h["b"])();return t?"ios"===t?"ios":"material":"web"}},created:function(){this.notificationChannel.channelInfo&&this.notificationChannel.channelInfo.config&&this.configVariableName?this.configVariable=this.notificationChannel.channelInfo.config[this.configVariableName]:this.configVariable=""},watch:{configVariable:function(t,i){null!==i&&(this.$emit("clearErrorMessages",this.settingKey("config")),this.updateConfig())}},methods:{settingKey:function(t){return Object(d["b"])(this.notificationChannel,t)},updateConfig:function(){var t=this;this.configUpdateTimeout&&clearTimeout(this.configUpdateTimeout);var i=Object(a["a"])({},this.configVariableName,this.configVariable);this.channelCreated?this.configUpdateTimeout=setTimeout((function(){t.configVariable?(t.notificationChannel.channelInfo.config=i,t.$emit("updateNotificationChannel",t.notificationChannel,["config"])):t.$emit("deleteNotificationChannel",t.notificationChannel)}),1e3):this.configVariable&&(this.configUpdateTimeout=setTimeout((function(){return t.$emit("createNotificationChannel",t.notificationChannel,i)}),1e3))}}},y=v,_=(e("6e09"),Object(p["a"])(y,n,o,!1,null,"431fb06b",null));i["a"]=_.exports},9960:function(t,i,e){}}]);
//# sourceMappingURL=chunk-571535b8.js.map