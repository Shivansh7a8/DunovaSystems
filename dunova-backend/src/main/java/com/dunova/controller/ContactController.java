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
    @GetMapping("/test")
public String test() {

    try (Socket socket = new Socket()) {

        socket.connect(
            new InetSocketAddress("smtp.gmail.com", 587),
            5000
        );

        return "Connected";

    } catch (Exception e) {

        return e.toString();

    }

}

}
