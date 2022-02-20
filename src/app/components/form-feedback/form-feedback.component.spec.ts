import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { FormFeedbackComponent } from './form-feedback.component';

describe('FormFeedbackComponent', () => {
  let component: FormFeedbackComponent;
  let fixture: ComponentFixture<FormFeedbackComponent>;
  let inc: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormFeedbackComponent ],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('form', () => {

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should test initial form values', () => {
      const feedbackForm = component.feedbackForm;
      const dummyData = { name: null, email: null, rating: null, comment: null};
      expect(feedbackForm.value).toEqual(dummyData);
    });

    it('should set form to be invalid', () => {
      component.feedbackForm.controls['name'].setValue('');
      component.feedbackForm.controls['email'].setValue('');
      component.feedbackForm.controls['rating'].setValue('');
      component.feedbackForm.controls['comment'].setValue('');
      expect(component.feedbackForm.valid).toBeFalsy();
    });

    /*it('should set form to be valid', () => {
      component.feedbackForm.controls['name'].setValue('Zam Abdul Vahid');
      component.feedbackForm.controls['email'].setValue('mail2zam@gmail.com');
      component.feedbackForm.controls['rating'].setValue(5);
      component.feedbackForm.controls['comment'].setValue('This is my comment for the product');
      expect(component.feedbackForm.valid).toBeTruthy();
    });*/

    it('should set form submitted to true', () => {
      spyOn(fixture.componentInstance, 'submitFeedback');
      let submitBtn: DebugElement = fixture.debugElement.query(By.css('#btn-submit'));
      submitBtn.nativeElement.click();
      fixture.detectChanges();
      expect(fixture.componentInstance.submitFeedback).toHaveBeenCalled();
    });

    it('should call submitFeedback method', () => {
      inc = spyOn(fixture.componentInstance, 'submitFeedback').and.callThrough();
      component.submitFeedback();
      expect(inc).toHaveBeenCalled();
    });

  });

  describe('name control field', () => {

    it('should test name is invalid', () => {
      component.feedbackForm.controls['name'].setValue('');
      expect(component.feedbackForm.get('name')?.errors?.['required']).toBeTruthy();
      component.feedbackForm.controls['name'].setValue('zam!@');
      expect(component.feedbackForm.get('name')?.errors?.['pattern']).toBeTruthy();
    });

    /*it('should test name is valid', () => {
      component.feedbackForm.controls['name'].setValue('Zam Abdul Vahid');
      expect(component.feedbackForm.get('name')?.valid).toBeTruthy();
    });*/

    it('should test name has minimum length', () => {
      component.feedbackForm.controls['name'].setValue('Za');
      expect(component.feedbackForm.get('name')?.errors?.['minength']).toBeFalsy();
      component.feedbackForm.controls['name'].setValue('Zam');
      expect(component.feedbackForm.get('name')?.errors?.['minength']).toBeFalsy();
    });

  });

  describe('email control field', () => {

    it('should test email field value', () => {
      component.feedbackForm.controls['email'].setValue('mail2zam@gmail.com');
      expect(component.feedbackForm.get('email')?.valid).toBeTruthy();
      component.feedbackForm.controls['email'].setValue('mail2zam');
      expect(component.feedbackForm.get('email')?.valid).toBeFalsy();
    });

  });

  describe('rating control field', () => {

    it('should test rating field value', () => {
      component.feedbackForm.controls['rating'].setValue(2);
      expect(component.feedbackForm.get('rating')?.valid).toBeTruthy();
    });

    it('should test minimum rating value to be greater than 0', () => {
      component.feedbackForm.controls['rating'].setValue(0);
      expect(component.feedbackForm.get('rating')?.invalid).toBeTruthy();
      expect(component.feedbackForm.get('rating')?.errors?.['min']).toBeTruthy();
    });

    it('should test max rating value to be less than or equal to 5', () => {
      component.feedbackForm.controls['rating'].setValue(6);
      expect(component.feedbackForm.get('rating')?.invalid).toBeTruthy();
      expect(component.feedbackForm.get('rating')?.errors?.['max']).toBeTruthy();
      component.feedbackForm.controls['rating'].setValue(5);
      expect(component.feedbackForm.get('rating')?.invalid).toBeFalsy();
      expect(component.feedbackForm.get('rating')?.errors?.['max']).toBeFalsy();
    });

  });

  describe('comment control field', () => {

    it('should test comment field value', () => {
      component.feedbackForm.controls['comment'].setValue('This is my product review comment');
      expect(component.feedbackForm.get('comment')?.valid).toBeTruthy();
      component.feedbackForm.controls['comment'].setValue('');
      expect(component.feedbackForm.get('comment')?.errors?.['required']).toBeTruthy();
    });

  });

});
