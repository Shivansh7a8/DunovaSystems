package com.dunova.service;

import com.dunova.dto.ContactRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Value;


@Service
public class EmailService {

    @Autowired
    JavaMailSender sender;

    @Value("${spring.mail.username}")
    private String adminEmail;

    public void sendEmail(ContactRequest request){

        // Mail to Admin
        SimpleMailMessage admin = new SimpleMailMessage();

        //admin.setTo("shuklashivansh3998@gmail.com");
        admin.setTo(adminEmail);

        admin.setSubject("New Contact Form");

        admin.setText(
                "Name : "+request.getName()
                        +"\nEmail : "+request.getEmail()
                        +"\nCompany : "+request.getCompany()
                        +"\n\nMessage\n"
                        +request.getMessage());

        sender.send(admin);

        // Auto Reply

        SimpleMailMessage reply=new SimpleMailMessage();

        reply.setTo(request.getEmail());

        reply.setSubject("Thank You for contacting Dunova Systems");

        reply.setText(

                "Hi "+request.getName()+",\n\n"

                        +"Thank you for contacting Dunova.\n\n"

                        +"We have received your request successfully.\n"

                        +"Our team will contact you within one business day.\n\n"

                        +"Regards,\n"

                        +"Dunova Systems"

        );

        sender.send(reply);

    }

}
