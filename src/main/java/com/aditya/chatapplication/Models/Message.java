package com.aditya.chatapplication.Models;

public class Message {
    private String name;
    private String content;

    public Message(String messageName, String content) {
        this.name = messageName;
        this.content = content;
    }

    public String getName() {
        return name;
    }

    public void setName(String messageName) {
        this.name = messageName;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
