import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PaymentComponent } from './pages/home/payment/payment.component';
import { BookingConfirmationComponent } from './pages/home/booking-confirmation/booking-confirmation.component';
import { LoginComponent } from './auth/login/login.component';
import { OrganizerComponent } from './pages/organizer/organizer.component'; // Import Organizer Component
import { DashboardComponent } from './pages/organizer/dashboard/dashboard.component'; // Import Dashboard Component
import { EventsComponent } from './pages/organizer/events/events.component'; // Import Events Component
import { BookingsComponent } from './pages/organizer/bookings/bookings.component'; // Import Bookings Component
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Default Route
  { path: 'admin', loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule) },
  { path: 'payment', component: PaymentComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'booking-confirmation', component: BookingConfirmationComponent },

  // Organizer Routes with Parameterized ID
  {
    path: 'organizer/:user_id', // Dynamically pass the user_id in the URL
    component: OrganizerComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'events', component: EventsComponent },
      { path: 'bookings', component: BookingsComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // Default child route
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Set up routing
  exports: [RouterModule],
})
export class AppRoutingModule {}