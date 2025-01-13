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
import {CommonModule, NgSwitch, NgSwitchCase} from "@angular/common";

@Component({
    standalone: true,
    selector: 'app-shared-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss'],
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
        NgSwitch,
        NgSwitchCase
    ],
})
export class SharedDialogComponent implements OnInit {
    form!: FormGroup;

    constructor(
        public dialogRef: MatDialogRef<SharedDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private fb: FormBuilder
    ) {
    }

    ngOnInit(): void {
        if (this.data.type === 'edit' || this.data.isCreate) {
            this.form = this.fb.group({
                todo: [this.data.todo?.todo || '', [Validators.required, Validators.minLength(3)]],
                completed: [this.data.todo?.completed || false, Validators.required],
                userId: [this.data.todo?.userId || 1, [Validators.required, Validators.min(1)]],
            });
        }
    }

    onCancel(): void {
        this.dialogRef.close();
    }

    onConfirm(): void {
        if ((this.data.type === 'edit' || this.data.isCreate) && this.form.valid) {
            this.dialogRef.close(this.form.value);
        } else {
            this.dialogRef.close(true);
        }
    }
}
