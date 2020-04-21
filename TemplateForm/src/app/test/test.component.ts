import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { EnrollmentService } from '../enrollment.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private enrollmentService:EnrollmentService) { }

  ngOnInit(): void {
  }

  topics =['Angular','Javascript','Forms'];

  userModel=new User('Bhaumik','bcs@gmail.com','7718973681','default','Morning',true);

  topicHasError=true;

  public validateTopic(value)
  {
    if(value ==='default')
    {
      this.topicHasError=true;
    }
    else
    {
      this.topicHasError=false;
    }
  }

  public onSubmit()
  {
     this.enrollmentService.enroll(this.userModel)
    .subscribe(data => console.log('Success!',data),
                error => console.log('Error!',error)
     );
  }
}
