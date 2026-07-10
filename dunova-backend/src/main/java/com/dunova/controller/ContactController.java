package com.dunova.controller;

import com.dunova.dto.ContactRequest;
import com.dunova.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
public class ContactController {

    @Autowired
    private EmailService emailService;
    
    @PostMapping
public ResponseEntity<String> sendMail(@RequestBody ContactRequest request) {

    try {
        emailService.sendEmail(request);
        return ResponseEntity.ok("Mail Sent Successfully");
    } catch (Exception e) {
        e.printStackTrace();
        return ResponseEntity.internalServerError().body(e.getMessage());
    }
}

}
