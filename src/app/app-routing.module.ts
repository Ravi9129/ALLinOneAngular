import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatePipe } from '@angular/common';

import { InterpolationComponent } from './Binding Components/interpolation/interpolation.component';
import { PropertyComponent } from './Binding Components/property/property.component';
import { EventComponent } from './Binding Components/event/event.component';
import { TwowaybindComponent } from './Binding Components/twowaybind/twowaybind.component';
import { NgmodelchangeComponent } from './Binding Components/ngmodelchange/ngmodelchange.component';

import { NgClassDirectiveComponent } from './AllDirectives/ng-class-directive/ng-class-directive.component';
import { NgIfDirectiveComponent } from './AllDirectives/ng-if-directive/ng-if-directive.component';
import { NgStyleDirectiveComponent } from './AllDirectives/ng-style-directive/ng-style-directive.component';
import { NgforDirctComponent } from './AllDirectives/ngfor-dirct/ngfor-dirct.component';
import { NgforNestedArrayComponent } from './AllDirectives/ngfor-nested-array/ngfor-nested-array.component';
import { SwitchDirectiveComponent } from './AllDirectives/switch-directive/switch-directive.component';
import { TrackByNgForComponent } from './AllDirectives/track-by-ng-for/track-by-ng-for.component';
import { ReactiveformsComponent } from './AllForms/reactiveforms/reactiveforms.component';
import { TemplateDrivenFComponent } from './AllForms/template-driven-f/template-driven-f.component';
import { AsyncPipeComponent } from './AllPipes/async-pipe/async-pipe.component';
import { CustomPipeComponent } from './AllPipes/custom-pipe/custom-pipe.component';
import { DatePipeComponent } from './AllPipes/date-pipe/date-pipe.component';
import { KeyUpValuePipeComponent } from './AllPipes/key-up-value-pipe/key-up-value-pipe.component';
import { MainpipeComponent } from './AllPipes/mainpipe/mainpipe.component';
import { CustomerDetailComponent } from './ParentChildTransfer/customer-detail/customer-detail.component';
import { CustomerListComponent } from './ParentChildTransfer/customer-list/customer-list.component';
import { CustomerComponent } from './childNestedComponent/customer/customer.component';
import { AllbindingsssComponent } from './AllScreens/Bindings/allbindingsss/allbindingsss.component';
import { ParentchildtransprojectComponent } from './AllScreens/ChildParentTransfer/parentchildtransproject/parentchildtransproject.component';
import { AllDirectivessComponent } from './AllScreens/Directives/all-directivess/all-directivess.component';
import { AllformmssComponent } from './AllScreens/Forms/allformmss/allformmss.component';
import { HomeeComponent } from './AllScreens/Home/homee/homee.component';
import { AllhookssComponent } from './AllScreens/Hooks/allhookss/allhookss.component';
import { ParentChildssComponent } from './AllScreens/ParentChild/parent-childss/parent-childss.component';
import { AllpipessComponent } from './AllScreens/Pipes/allpipess/allpipess.component';
import { Child5Component } from './LifeCycleHooks/DoCheck/child5/child5.component';
import { Parent5Component } from './LifeCycleHooks/DoCheck/parent5/parent5.component';
import { Child3Component } from './LifeCycleHooks/OnInitOnDestroy/child3/child3.component';
import { Parent3Component } from './LifeCycleHooks/OnInitOnDestroy/parent3/parent3.component';
import { Child4Component } from './LifeCycleHooks/Onchanges/child4/child4.component';
import { Parent4Component } from './LifeCycleHooks/Onchanges/parent4/parent4.component';
import { Child2Component } from './LifeCycleHooks/lifecycle/child2/child2.component';
import { GrandchildComponent } from './LifeCycleHooks/lifecycle/grandchild/grandchild.component';
import { Parent2Component } from './LifeCycleHooks/lifecycle/parent2/parent2.component';
import { Child1Component } from './ParentChildComponentComunication/ChildToParent/child1/child1.component';
import { Parent1Component } from './ParentChildComponentComunication/ChildToParent/parent1/parent1.component';
import { ChildComponent } from './ParentChildComponentComunication/ParentToChild/child/child.component';
import { ParentComponent } from './ParentChildComponentComunication/ParentToChild/parent/parent.component';

const routes: Routes = [
  {path:'interpolation',component:InterpolationComponent},
{path:'property',component:PropertyComponent},
{path:'event',component:EventComponent},
{path:'twowaybind',component:TwowaybindComponent},
{path:'ngmodelchange',component:NgmodelchangeComponent},
{path:'customer',component:CustomerComponent},
{path:'ngfor-dirct',component:NgforDirctComponent},
{path:'ngfor-nested-array',component:NgforNestedArrayComponent},
{path:'switch-directive',component:SwitchDirectiveComponent},
{path:'ng-if-directive',component:NgIfDirectiveComponent},
{path:'ng-class-directive',component:NgClassDirectiveComponent},
{path:'ng-style-directive',component:NgStyleDirectiveComponent},
{path:'track-by-ng-for',component:TrackByNgForComponent},
{path:'customer-detail',component:CustomerDetailComponent},
{path:'customer-list',component:CustomerListComponent},
{path:'mainpipe',component:MainpipeComponent},
{path:'custom-pipe',component:CustomPipeComponent},
{path:'date-pipe',component:DatePipeComponent},
{path:'async-pipe',component:AsyncPipeComponent},
{path:'key-up-value',component:KeyUpValuePipeComponent},
{path:'parent',component:ParentComponent},
{path:'child',component:ChildComponent},
{path:'parent1',component:Parent1Component},
{path:'child1',component:Child1Component},
{path:'child2',component:Child2Component},
{path:'grandchild',component:GrandchildComponent},
{path:'parent2',component:Parent2Component},
{path:'child3',component:Child3Component},
{path:'parent3',component:Parent3Component},
{path:'parent4',component:Parent4Component},
{path:'child4',component:Child4Component},
{path:'parent5',component:Parent5Component},
{path:'child5',component:Child5Component},
{path:'all-directivess',component:AllDirectivessComponent},
{path:'allpipess',component:AllpipessComponent},
{path:'allbindingsss',component:AllbindingsssComponent},
{path:'allhookss',component:AllhookssComponent},
{path:'parent-childss',component:ParentChildssComponent},
{path:'homee',component:HomeeComponent},
{path:'templlate-driven-f',component:TemplateDrivenFComponent},
{path:'reactiveforms',component:ReactiveformsComponent},
{path:'allformmss',component:AllformmssComponent},
{path:'parentchildtransproject',component:ParentchildtransprojectComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
