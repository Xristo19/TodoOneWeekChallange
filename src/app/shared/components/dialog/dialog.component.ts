import {Component, Inject, OnInit} from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogContent,
  MatDialogActions,
  MatDialogTitle,
} from '@angular/material/dialog';
import {ReactiveFormsModule, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatOption, MatSelect} from "@angular/material/select";
import {CommonModule, NgSwitch} from "@angular/common";

@Component({
  selector: 'app-shared-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  standalone: true,
  imports: [
    MatDialogContent,
    MatDialogActions,
    MatDialogTitle,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelect,
    MatOption,
    ReactiveFormsModule,
    MatSelect,
    MatOption,
    CommonModule,
    NgSwitch
  ],
})
export class SharedDialogComponent  implements OnInit {
  form!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<SharedDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    if (this.data.type === 'edit') {
      this.form = this.fb.group({
        todo: [this.data.todo.todo, [Validators.required, Validators.minLength(3)]],
        completed: [this.data.todo.completed, Validators.required],
        userId: [this.data.todo.userId, [Validators.required, Validators.min(1)]],
      });
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onConfirm(): void {
    if (this.data.type === 'edit' && this.form.valid) {
      this.dialogRef.close(this.form.value);
    } else if (this.data.type !== 'edit') {
      this.dialogRef.close(true);
    }
  }
}
