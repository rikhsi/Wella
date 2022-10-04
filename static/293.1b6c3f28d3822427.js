"use strict";(self.webpackChunkWella=self.webpackChunkWella||[]).push([[293],{7293:(D,c,r)=>{r.r(c),r.d(c,{PartnersModule:()=>J});var g=r(9808),p=r(7152),h=r(9727),t=r(5e3),z=r(3640),f=r(7501),b=r(6001),u=r(1894),l=r(868),a=r(8909),m=r(7823),v=r(2124),C=r(2683);function P(e,s){if(1&e){const n=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td")(4,"div",13),t._UZ(5,"img",14),t.qZA()(),t.TgZ(6,"td",15),t._uU(7),t.qZA(),t.TgZ(8,"td"),t._uU(9),t.qZA(),t.TgZ(10,"td")(11,"div",16)(12,"div",11)(13,"button",17),t.NdJ("click",function(){const d=t.CHM(n).$implicit;return t.oxw().showConfirm(d.id)}),t._UZ(14,"span",18),t.qZA()()()()()}if(2&e){const n=s.$implicit,o=t.oxw();t.xp6(2),t.Oqu(n.id),t.xp6(3),t.Q6J("nzSrc",n.photo)("nzFallback",o.fallback),t.xp6(1),t.Q6J("nzEllipsis",!0),t.xp6(1),t.Oqu(n.title),t.xp6(2),t.Oqu(n.created_at)}}const x=function(){return[0,80]},T=function(){return[0,40]},Z=[{path:"",component:(()=>{class e{constructor(n,o,i,d){this.modal=n,this.adminService=o,this.msg=i,this.partnersService=d,this.partners=[],this.fallback="../../../assets/img/loading.jpg",this.tableLoading=!1}getPartners(){this.tableLoading=!0,this.getSub=this.partnersService.get().subscribe({next:n=>{this.partners=n,this.tableLoading=!1},error:n=>{console.error("There was an error!",n),this.tableLoading=!1,this.msg.error("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c")}})}deletePartner(n){this.tableLoading=!0,this.deleteSub=this.partnersService.delete(n).subscribe({next:o=>{console.log(o),this.partners=this.partners.filter(i=>i.id!==n),this.tableLoading=!1,this.msg.success(" \u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0443\u0434\u0430\u043b\u0435\u043d\u043e")},error:o=>{console.error("There was an error!",o),this.tableLoading=!1,this.msg.error("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0443\u0434\u0430\u043b\u0438\u0442\u044c")}})}showConfirm(n){this.confirmModal=this.modal.confirm({nzTitle:"\u0425\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043f\u0430\u0440\u0442\u043d\u0451\u0440\u0430?",nzContent:"\u041d\u0430\u0436\u0438\u043c\u0430\u044f \u041e\u041a, \u0432\u044b \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u0443\u0434\u0430\u043b\u0438\u0442\u0435 \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u044b\u0439 \u0432\u0430\u043c\u0438 \u043f\u0430\u0440\u0442\u043d\u0451\u0440",nzCancelText:"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c",nzCentered:!0,nzClosable:!1,nzAutofocus:null,nzOnOk:()=>{this.deletePartner(n)}})}ngOnInit(){setTimeout(()=>{this.adminService.changePage(2)},10),this.getPartners()}ngOnDestroy(){this.getSub&&this.getSub.unsubscribe(),this.deleteSub&&this.deleteSub.unsubscribe()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(z.Sf),t.Y36(f.l),t.Y36(h.dD),t.Y36(b.U))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-partners"]],features:[t._Bn([h.dD])],decls:26,vars:11,consts:[[1,"partners__container"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],["nz-col","","nzSpan","24",1,"tab"],[3,"nzType"],["nzTitle","\u0412\u0441\u0435 \u043f\u0430\u0440\u0442\u043d\u0451\u0440\u044b"],[3,"nzData","nzLoading","nzPageSize"],["partnersList",""],[3,"nzWidth"],[4,"ngFor","ngForOf"],["nz-row","","nzAlign","middle",1,"tab__buttons",3,"nzGutter"],["nz-col",""],["nz-icon","","title","\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c","nzType","reload","nzTheme","outline",1,"tab__reload",3,"click"],[1,"partners__img"],["nz-image","","onerror","this.parentNode.removeChild(this)",3,"nzSrc","nzFallback"],[3,"nzEllipsis"],["nz-row","","nzJustify","space-between"],["title","\u0423\u0434\u0430\u043b\u0438\u0442\u044c",1,"button",3,"click"],["nz-icon","","nzType","delete","nzTheme","outline"]],template:function(n,o){if(1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",1)(4,"div",3)(5,"nz-tabset",4)(6,"nz-tab",5)(7,"nz-table",6,7)(9,"thead")(10,"tr")(11,"th"),t._uU(12,"ID"),t.qZA(),t.TgZ(13,"th"),t._uU(14,"\u0424\u043e\u0442\u043e"),t.qZA(),t.TgZ(15,"th"),t._uU(16,"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),t.qZA(),t.TgZ(17,"th"),t._uU(18,"\u0414\u0430\u0442\u0430"),t.qZA(),t.TgZ(19,"th",8),t._uU(20,"\u0418\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b"),t.qZA()()(),t.TgZ(21,"tbody"),t.YNc(22,P,15,6,"tr",9),t.qZA()()()(),t.TgZ(23,"div",10)(24,"div",11)(25,"span",12),t.NdJ("click",function(){return o.getPartners()}),t.qZA()()()()()()()()),2&n){const i=t.MAs(8);t.xp6(1),t.Q6J("nzGutter",t.DdM(9,x)),t.xp6(2),t.Q6J("nzGutter",t.DdM(10,T)),t.xp6(2),t.Q6J("nzType","card"),t.xp6(2),t.Q6J("nzData",o.partners)("nzLoading",o.tableLoading)("nzPageSize",10),t.xp6(12),t.Q6J("nzWidth","8%"),t.xp6(3),t.Q6J("ngForOf",i.data),t.xp6(1),t.Q6J("nzGutter",20)}},directives:[u.SK,u.t3,l.xH,l.xw,a.N8,a.Om,a.$Z,a.Uo,a._C,a.p0,g.sg,m.Ie,a.ky,v.Ls,C.w],styles:[".button[_ngcontent-%COMP%]{font-size:18px;background:inherit}.button[_ngcontent-%COMP%]:hover{color:red;transform:scale(119%)}.partners__container[_ngcontent-%COMP%]{position:relative;padding:20px 20px 0;height:100%;overflow-y:scroll}.partners__img[_ngcontent-%COMP%]{width:100px;height:70px}.partners__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;pointer-events:none;object-fit:fill}.alert[_ngcontent-%COMP%]{position:fixed;z-index:1000;top:10%;right:35px;width:50%}.tab[_ngcontent-%COMP%]{position:relative;font-size:24px}.tab__buttons[_ngcontent-%COMP%]{position:absolute;margin-top:25px;top:0;right:0}.tab__reload[_ngcontent-%COMP%]{cursor:pointer}.tab__reload[_ngcontent-%COMP%]:hover{color:green}.tab__add[_ngcontent-%COMP%]{cursor:pointer}.tab__add[_ngcontent-%COMP%]:hover{color:green}[nz-button][_ngcontent-%COMP%]{width:100%}"]}),e})()}];let M=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[p.Bz.forChild(Z)],p.Bz]}),e})();var _=r(5737),O=r(7581),S=r(1047),y=r(6042),A=r(9400);let J=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[g.ez,M,a.HQ,_.S,u.Jb,v.PV,O.cS,z.Qp,S.o7,y.sL,l.we,A.ZJ,m.Gb]]}),e})()}}]);