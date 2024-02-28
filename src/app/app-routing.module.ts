import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './services/auth/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full',
  },
  {
    path: 'signin',
    loadChildren: () => import('./common/common.module').then(m => m.CommonAppModule)
  },
  {
    path: 'agentPanel',
    loadChildren: () => import('./agentPanel/agent-panel.module').then(m => m.AgentPanelModule),

  },

];
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
