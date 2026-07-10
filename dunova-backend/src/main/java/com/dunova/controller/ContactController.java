package com.dunova.controller;

import com.dunova.dto.ContactRequest;
import com.dunova.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.InetAddress;

import java.net.InetSocketAddress;
import java.net.Socket;

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
    

@GetMapping("/dns-test")
public String dnsTest() {

    try {
        InetAddress address = InetAddress.getByName("smtp.gmail.com");
        return address.getHostAddress();
    } catch (Exception e) {
        return e.toString();
    }
}


@GetMapping("/smtp-test")
public String smtpTest() {

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
