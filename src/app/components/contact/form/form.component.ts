import { Component, signal, WritableSignal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatIconButton
  ],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class ContactFormComponent {
  contactForm: FormGroup;

  selectedFileName: WritableSignal<string> = signal('');

  constructor(private fb: FormBuilder, private dialog: MatDialog) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      licenseNumber: [''],
      reason: ['']
    });
  }

  onSubmit() {
    this.contactForm.markAllAsTouched();

    if (this.contactForm.valid) {
      this.selectedFileName.set('');

      this.contactForm.reset();

      this.contactForm.markAsUntouched();
      this.contactForm.markAsPristine();
      this.contactForm.controls['name'].setErrors(null);
      this.contactForm.controls['surname'].setErrors(null);
      this.contactForm.controls['email'].setErrors(null);

      this.openDialog()
    }
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFileName.set(input.files[0].name);
    }
  }

  openDialog() {
    this.dialog.open(DialogComponent);
  }
}
