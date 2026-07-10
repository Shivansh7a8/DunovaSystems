package com.dunova.controller;

import com.dunova.dto.ContactRequest;
import com.dunova.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "https://dunova-systems-git-main-shivansh7a8s-projects.vercel.app")
public class ContactController {

    @Autowired
    private EmailService emailService;

    @PostMapping
    public ResponseEntity<String> sendMail(@RequestBody ContactRequest request){

        emailService.sendEmail(request);

        return ResponseEntity.ok("Mail Sent Successfully");

    }

}
