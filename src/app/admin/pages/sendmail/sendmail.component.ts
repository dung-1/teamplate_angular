import { Component } from '@angular/core';
import { ApiService } from '../../../../service/api/api.service';
import { UserService } from '../../../../service/user.service';
import { ConstService } from '../../../../service/const.service';

@Component({
  selector: 'app-sendmail',
  templateUrl: './sendmail.component.html',
  styleUrl: './sendmail.component.css',
})
export class SendmailComponent {
  emailData = {
    toEmail: '',
    subject: '',
    body: '',
  };

  constructor(
    private apiService: ApiService,
    private userService: UserService
  ) {}

  sendEmail() {
    this.apiService.post(`${ConstService.Senmail}`, this.emailData).subscribe(
      (response) => {
        alert('Email đã được gửi thành công!');
      },
      (error) => {
        console.error('Có lỗi xảy ra khi gửi email', error);
      }
    );
  }
}
