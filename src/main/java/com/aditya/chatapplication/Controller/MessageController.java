package com.aditya.chatapplication.Controller;


import com.aditya.chatapplication.Models.Message;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MessageController {


    @MessageMapping("/message")
    @SendTo("/topic/return-to")
    public Message getContent(@RequestBody Message message)
    {
        try
        {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println(message.getContent());
        System.out.println(message.getName());

        return message;
    }

    @SpringBootApplication
    public static class ChatApplication {

        public static void main(String[] args) {
            SpringApplication.run(ChatApplication.class, args);
        }

    }
}
