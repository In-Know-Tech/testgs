"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3006],{4016:(e,t,a)=>{a.d(t,{Z:()=>n});var l=a(3645),o=a.n(l)()((function(e){return e[1]}));o.push([e.id,".avatar-img[data-v-82b9396c]{height:60px;-o-object-fit:cover;object-fit:cover;width:60px}.leave-type-color[data-v-82b9396c]{border-radius:30px;color:#fff;font-weight:500;padding:2px 5px}.modal-dialog[data-v-82b9396c]{max-width:1000px!important}",""]);const n=o},3006:(e,t,a)=>{a.r(t),a.d(t,{default:()=>ge});var l=a(821),o=function(e){return(0,l.pushScopeId)("data-v-82b9396c"),e=e(),(0,l.popScopeId)(),e},n={class:"row justify-content-center pt-3"},r={class:"col-12"},s={class:"card"},i={class:"card-header border-0"},c={class:"d-flex justify-content-between"},d={class:"card-title"},m=o((function(){return(0,l.createElementVNode)("i",{class:"fa-solid fa-plus"},null,-1)})),u=o((function(){return(0,l.createElementVNode)("i",{class:"fa-solid fa-filter"},null,-1)})),p={key:0},y={key:1},v=o((function(){return(0,l.createElementVNode)("i",{class:"fa-solid fa-times"},null,-1)})),g={key:0,class:"card-body border-bottom d-flex justify-content-between"},f={class:"w-25"},h={value:""},V=["value"],E={class:"ml-auto w-25"},N={value:""},_={value:"pending"},k={value:"approved"},D={value:"rejected"},b={class:"card-body table-responsive p-0"},w={class:"table table-valign-middle"},S=["src"],B={class:"text-danger ml-1"},C={class:"d-flex"},F=["onClick"],q={key:1},x={colspan:"20",class:"text-center"},R={key:0},M={class:"modal-mask"},T={class:"modal-wrapper"},L={class:"modal-dialog d-flex justify-content-center",role:"document"},Y={class:"modal-content"},j={class:"modal-header"},A={class:"modal-title"},Z={type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},I={class:"modal-body"},z={class:"table"},H={width:"30%"},P={width:"70%"},O={width:"30%"},$={width:"70%"},U={href:"#"},G={width:"30%"},J={width:"70%"},K={width:"30%"},Q={width:"70%"},W={width:"30%"},X={width:"70%"},ee={width:"30%"},te={width:"50%"},ae={class:"modal-footer"};var le=a(9418),oe=a(7031),ne=a(7484),re=a.n(ne);const se={props:{leaveRequests:Array,leaveTypes:Array,filters:Object},components:{Pagination:le.Z,Actions:oe.Z},data:function(){return{showModal:!1,showFilter:!1,form:{status:this.filters.status,leave_type:this.filters.leave_type},detailForm:{type:"",color:"",status:"",start:"",end:"",days:"",reason:"",user_id:"",employee:""}}},methods:(ie={getBadgeType:function(e){return"pending"==e?"badge-warning":"approved"==e?"badge-success":"badge-danger"},startDate:function(e){return re()(e).format("DD MMM, YYYY")},endDate:function(e){return re()(e).format("DD MMM, YYYY")},filteringData:function(){this.showFilter=!this.showFilter,localStorage.setItem("companyLeaveRequestList",this.showFilter)},filterData:function(){this.$inertia.get(route("company.leaveRequests.index"),{status:this.form.status,leave_type:this.form.leave_type,team:this.form.team},{preserveState:!0,replace:!0})},showDetails:function(e){this.detailForm.type=e.leave_type.name,this.detailForm.color=e.leave_type.color,this.detailForm.status=e.status,this.detailForm.start=e.start,this.detailForm.end=e.end,this.detailForm.days=e.days,this.detailForm.reason=e.reason,this.detailForm.user_id=e.employee.user_id,this.detailForm.employee=e.employee.user.name,this.showModal=!0},requestFor:function(e,t){var a=re()(e).format("DD MMM, YYYY"),l=re()(t).format("DD MMM, YYYY");return"".concat(a," - ").concat(l)}},ce="getBadgeType",de=function(e){return"pending"==e?"badge-warning":"approved"==e?"badge-success":"badge-danger"},ce in ie?Object.defineProperty(ie,ce,{value:de,enumerable:!0,configurable:!0,writable:!0}):ie[ce]=de,ie),mounted:function(){this.checkPagePermission("owner"),this.showFilter="true"==localStorage.getItem("companyLeaveRequestList")}};var ie,ce,de,me=a(3379),ue=a.n(me),pe=a(4016),ye={insert:"head",singleton:!1};ue()(pe.Z,ye);pe.Z.locals;const ve=(0,a(3744).Z)(se,[["render",function(e,t,a,o,le,oe){var ne=(0,l.resolveComponent)("Head"),re=(0,l.resolveComponent)("Link"),se=(0,l.resolveComponent)("Actions"),ie=(0,l.resolveComponent)("EyeIcon"),ce=(0,l.resolveComponent)("Pagination"),de=(0,l.resolveDirective)("tooltip"),me=(0,l.resolveDirective)("click-outside");return(0,l.openBlock)(),(0,l.createElementBlock)(l.Fragment,null,[(0,l.createVNode)(ne,{title:e.__("Leave Request List")},null,8,["title"]),(0,l.createElementVNode)("div",n,[(0,l.createElementVNode)("div",r,[(0,l.createElementVNode)("div",s,[(0,l.createElementVNode)("div",i,[(0,l.createElementVNode)("div",c,[(0,l.createElementVNode)("h3",d,(0,l.toDisplayString)(e.__("Leave Request List")),1),(0,l.createElementVNode)("div",null,[(0,l.createVNode)(re,{href:e.route("company.leaveRequests.create"),class:"btn btn-primary"},{default:(0,l.withCtx)((function(){return[m,(0,l.createTextVNode)(" "+(0,l.toDisplayString)(e.__("Create a new request")),1)]})),_:1},8,["href"]),(0,l.createElementVNode)("button",{class:"btn btn-secondary ml-2",onClick:t[0]||(t[0]=function(){return oe.filteringData&&oe.filteringData.apply(oe,arguments)})},[u,(0,l.createTextVNode)("   "),le.showFilter?((0,l.openBlock)(),(0,l.createElementBlock)("span",y,(0,l.toDisplayString)(e.__("Hide Filter")),1)):((0,l.openBlock)(),(0,l.createElementBlock)("span",p,(0,l.toDisplayString)(e.__("Show Filter")),1))]),le.form.status||le.form.leave_type?((0,l.openBlock)(),(0,l.createBlock)(re,{key:0,href:e.route("company.leaveRequests.index"),class:"btn btn-danger ml-2"},{default:(0,l.withCtx)((function(){return[v,(0,l.createTextVNode)(" "+(0,l.toDisplayString)(e.__("Clear")),1)]})),_:1},8,["href"])):(0,l.createCommentVNode)("",!0)])])]),le.showFilter?((0,l.openBlock)(),(0,l.createElementBlock)("div",g,[(0,l.createElementVNode)("div",f,[(0,l.createElementVNode)("label",null,(0,l.toDisplayString)(e.__("Leave Type")),1),(0,l.withDirectives)((0,l.createElementVNode)("select",{class:"form-control","onUpdate:modelValue":t[1]||(t[1]=function(e){return le.form.leave_type=e}),onChange:t[2]||(t[2]=function(){return oe.filterData&&oe.filterData.apply(oe,arguments)})},[(0,l.createElementVNode)("option",h,(0,l.toDisplayString)(e.__("All")),1),((0,l.openBlock)(!0),(0,l.createElementBlock)(l.Fragment,null,(0,l.renderList)(a.leaveTypes,(function(e){return(0,l.openBlock)(),(0,l.createElementBlock)("option",{value:e.id,key:e.id},(0,l.toDisplayString)(e.name),9,V)})),128))],544),[[l.vModelSelect,le.form.leave_type]])]),(0,l.createElementVNode)("div",E,[(0,l.createElementVNode)("label",null,(0,l.toDisplayString)(e.__("Status")),1),(0,l.withDirectives)((0,l.createElementVNode)("select",{class:"form-control","onUpdate:modelValue":t[3]||(t[3]=function(e){return le.form.status=e}),onChange:t[4]||(t[4]=function(){return oe.filterData&&oe.filterData.apply(oe,arguments)})},[(0,l.createElementVNode)("option",N,(0,l.toDisplayString)(e.__("All")),1),(0,l.createElementVNode)("option",_,(0,l.toDisplayString)(e.__("Pending")),1),(0,l.createElementVNode)("option",k,(0,l.toDisplayString)(e.__("Approved")),1),(0,l.createElementVNode)("option",D,(0,l.toDisplayString)(e.__("Rejected")),1)],544),[[l.vModelSelect,le.form.status]])])])):(0,l.createCommentVNode)("",!0),(0,l.createElementVNode)("div",b,[(0,l.createElementVNode)("table",w,[(0,l.createElementVNode)("thead",null,[(0,l.createElementVNode)("tr",null,[(0,l.createElementVNode)("th",null,(0,l.toDisplayString)(e.__("Employee")),1),(0,l.createElementVNode)("th",null,(0,l.toDisplayString)(e.__("Leave Type")),1),(0,l.createElementVNode)("th",null,(0,l.toDisplayString)(e.__("Team")),1),(0,l.createElementVNode)("th",null,(0,l.toDisplayString)(e.__("Date")),1),(0,l.createElementVNode)("th",null,(0,l.toDisplayString)(e.__("Status")),1),(0,l.createElementVNode)("th",null,(0,l.toDisplayString)(e.__("Action")),1)])]),(0,l.createElementVNode)("tbody",null,[a.leaveRequests&&a.leaveRequests.data.length?((0,l.openBlock)(!0),(0,l.createElementBlock)(l.Fragment,{key:0},(0,l.renderList)(a.leaveRequests.data,(function(t,a){return(0,l.openBlock)(),(0,l.createElementBlock)("tr",{key:a},[(0,l.createElementVNode)("td",null,[(0,l.createVNode)(re,{href:e.route("company.employees.show",t.employee.user_id)},{default:(0,l.withCtx)((function(){return[(0,l.createElementVNode)("img",{src:t.employee.user.avatar,alt:"img",class:"img-circle img-size-32 mr-2"},null,8,S),(0,l.createTextVNode)(" "+(0,l.toDisplayString)(t.employee.user.name),1)]})),_:2},1032,["href"])]),(0,l.createElementVNode)("td",null,[(0,l.createElementVNode)("span",{style:(0,l.normalizeStyle)({background:t.leave_type.color,border:"2px solid "+t.leave_type.color}),class:"leave-type-color"},(0,l.toDisplayString)(t.leave_type.name),5)]),(0,l.createElementVNode)("td",null,(0,l.toDisplayString)(t.employee.team.name),1),(0,l.createElementVNode)("td",null,[(0,l.createTextVNode)((0,l.toDisplayString)(oe.startDate(t.start))+" - "+(0,l.toDisplayString)(oe.endDate(t.end))+" (",1),(0,l.createElementVNode)("span",B,(0,l.toDisplayString)(t.days)+" "+(0,l.toDisplayString)(e.pluralize(t.days,"Day")),1),(0,l.createTextVNode)(") ")]),(0,l.createElementVNode)("td",null,[(0,l.createElementVNode)("span",{class:(0,l.normalizeClass)(["toCapitalFirst badge",oe.getBadgeType(t.status)])},(0,l.toDisplayString)(t.status),3)]),(0,l.createElementVNode)("td",C,[(0,l.createVNode)(se,{leaveRequest:t},null,8,["leaveRequest"]),(0,l.withDirectives)(((0,l.openBlock)(),(0,l.createElementBlock)("button",{onClick:function(e){return oe.showDetails(t)},class:"btn btn-sm"},[(0,l.createVNode)(ie)],8,F)),[[de,e.__("Details")]])])])})),128)):((0,l.openBlock)(),(0,l.createElementBlock)("tr",q,[(0,l.createElementVNode)("td",x,[(0,l.createElementVNode)("h6",null,(0,l.toDisplayString)(e.__("No Data Found")),1)])]))])]),(0,l.createVNode)(ce,{links:a.leaveRequests.links},null,8,["links"])])])])]),le.showModal?((0,l.openBlock)(),(0,l.createElementBlock)("div",R,[(0,l.createVNode)(l.Transition,{name:"fade"},{default:(0,l.withCtx)((function(){return[(0,l.createElementVNode)("div",M,[(0,l.createElementVNode)("div",T,[(0,l.createElementVNode)("div",L,[(0,l.withDirectives)(((0,l.openBlock)(),(0,l.createElementBlock)("div",Y,[(0,l.createElementVNode)("div",j,[(0,l.createElementVNode)("h5",A,(0,l.toDisplayString)(e.__("Leave Request Details")),1),(0,l.createElementVNode)("button",Z,[(0,l.createElementVNode)("span",{"aria-hidden":"true",onClick:t[5]||(t[5]=function(e){return le.showModal=!1})},"×")])]),(0,l.createElementVNode)("div",I,[(0,l.createElementVNode)("table",z,[(0,l.createElementVNode)("tbody",null,[(0,l.createElementVNode)("tr",null,[(0,l.createElementVNode)("td",H,(0,l.toDisplayString)(e.__("Employee")),1),(0,l.createElementVNode)("td",P,[(0,l.createVNode)(re,{href:e.route("company.employees.show",le.detailForm.user_id)},{default:(0,l.withCtx)((function(){return[(0,l.createTextVNode)((0,l.toDisplayString)(le.detailForm.employee),1)]})),_:1},8,["href"])])]),(0,l.createElementVNode)("tr",null,[(0,l.createElementVNode)("td",O,(0,l.toDisplayString)(e.__("Leave Type")),1),(0,l.createElementVNode)("td",$,[(0,l.createElementVNode)("a",U,[(0,l.createElementVNode)("span",{style:(0,l.normalizeStyle)({background:le.detailForm.color,border:"2px solid "+le.detailForm.color}),class:"leave-type-color"},(0,l.toDisplayString)(le.detailForm.type),5)])])]),(0,l.createElementVNode)("tr",null,[(0,l.createElementVNode)("td",G,(0,l.toDisplayString)(e.__("Date")),1),(0,l.createElementVNode)("td",J,(0,l.toDisplayString)(oe.requestFor(le.detailForm.start,le.detailForm.end)),1)]),(0,l.createElementVNode)("tr",null,[(0,l.createElementVNode)("td",K,(0,l.toDisplayString)(e.__("Total Days")),1),(0,l.createElementVNode)("td",Q,(0,l.toDisplayString)(le.detailForm.days)+" "+(0,l.toDisplayString)(e.pluralize(le.detailForm.days,"Day")),1)]),(0,l.createElementVNode)("tr",null,[(0,l.createElementVNode)("td",W,(0,l.toDisplayString)(e.__("Status")),1),(0,l.createElementVNode)("td",X,[(0,l.createElementVNode)("span",{class:(0,l.normalizeClass)(["toCapitalFirst badge",oe.getBadgeType(le.detailForm.status)])},(0,l.toDisplayString)(le.detailForm.status),3)])]),(0,l.createElementVNode)("tr",null,[(0,l.createElementVNode)("td",ee,(0,l.toDisplayString)(e.__("Reason")),1),(0,l.createElementVNode)("td",te,(0,l.toDisplayString)(le.detailForm.reason),1)])])])]),(0,l.createElementVNode)("div",ae,[(0,l.createElementVNode)("button",{type:"button",class:"btn btn-secondary",onClick:t[6]||(t[6]=function(e){return le.showModal=!1})},(0,l.toDisplayString)(e.__("Close")),1)])])),[[me,function(){return le.showModal=!1}]])])])])]})),_:1})])):(0,l.createCommentVNode)("",!0)],64)}],["__scopeId","data-v-82b9396c"]]),ge=ve},7031:(e,t,a)=>{a.d(t,{Z:()=>n});var l=a(821);const o={props:{leaveRequest:{type:Object,required:!0}},methods:{statusChange:function(e){this.$inertia.post(route("company.leaveRequests.status"),{id:this.leaveRequest.id,status:e})},editData:function(e){this.$inertia.get(route("company.leaveRequests.edit",e))}}};const n=(0,a(3744).Z)(o,[["render",function(e,t,a,o,n,r){var s=(0,l.resolveComponent)("CheckIcon"),i=(0,l.resolveComponent)("CrossIcon"),c=(0,l.resolveComponent)("EditIcon"),d=(0,l.resolveDirective)("tooltip");return(0,l.openBlock)(),(0,l.createElementBlock)(l.Fragment,null,["pending"==a.leaveRequest.status||"rejected"==a.leaveRequest.status?(0,l.withDirectives)(((0,l.openBlock)(),(0,l.createElementBlock)("button",{key:0,onClick:t[0]||(t[0]=function(e){return r.statusChange("approved")}),class:"btn btn-sm"},[(0,l.createVNode)(s)])),[[d,e.__("Accept Request")]]):(0,l.createCommentVNode)("",!0),"pending"==a.leaveRequest.status||"approved"==a.leaveRequest.status?(0,l.withDirectives)(((0,l.openBlock)(),(0,l.createElementBlock)("button",{key:1,onClick:t[1]||(t[1]=function(e){return r.statusChange("rejected")}),class:"btn btn-sm"},[(0,l.createVNode)(i)])),[[d,e.__("Reject Request")]]):(0,l.createCommentVNode)("",!0),"pending"==a.leaveRequest.status?(0,l.withDirectives)(((0,l.openBlock)(),(0,l.createElementBlock)("button",{key:2,onClick:t[2]||(t[2]=function(e){return r.editData(a.leaveRequest.id)}),class:"btn btn-sm"},[(0,l.createVNode)(c)])),[[d,e.__("Edit")]]):(0,l.createCommentVNode)("",!0)],64)}]])},9418:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(821),o={class:"pagination justify-content-center"},n=["innerHTML"];const r={props:{links:{type:Array,required:!0}}};const s=(0,a(3744).Z)(r,[["render",function(e,t,a,r,s,i){var c=(0,l.resolveComponent)("Link");return(0,l.openBlock)(),(0,l.createElementBlock)("nav",null,[(0,l.createElementVNode)("ul",o,[((0,l.openBlock)(!0),(0,l.createElementBlock)(l.Fragment,null,(0,l.renderList)(a.links,(function(e,t){return(0,l.openBlock)(),(0,l.createElementBlock)(l.Fragment,null,[e.url?((0,l.openBlock)(),(0,l.createElementBlock)("li",{class:(0,l.normalizeClass)(["page-item",{active:e.active}]),key:t},[(0,l.createVNode)(c,{class:"page-link d-inline",href:e.url,innerHTML:e.label},null,8,["href","innerHTML"])],2)):((0,l.openBlock)(),(0,l.createElementBlock)("li",{class:"page-item disabled",key:t,style:{"margin-top":"-7px"}},[(0,l.createElementVNode)("a",{class:"page-link",href:"#",innerHTML:e.label},null,8,n)]))],64)})),256))])])}]])}}]);