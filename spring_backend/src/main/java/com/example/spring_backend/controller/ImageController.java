package com.example.spring_backend.controller;

import com.example.spring_backend.entity.Image;
import com.example.spring_backend.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/images")
@CrossOrigin("*")
public class ImageController {

    private final ImageService imageService;
    private final String uploadDir = "D:\\My Projects\\Spring Boot 1\\backend\\src\\main\\resources\\static\\ImageFolder";

    @Autowired
    public ImageController(ImageService imageService) {
        this.imageService = imageService;
    }

    @PostMapping("/addImage")
    public ResponseEntity<String> saveImage(
            @RequestParam("file") MultipartFile file,
            @RequestParam("placeName") String placeName,
            @RequestParam("country") String country,
            @RequestParam("price") Double price
    ) {
        try {
            return ResponseEntity.ok(imageService.saveImage(file, placeName, country, price));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error uploading file: " + e.getMessage());
        }
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<Image>> getAllImages() {
        return ResponseEntity.ok(imageService.getAllImages());
    }

    @GetMapping("/image/{fileName}")
    public ResponseEntity<Resource> getImage(@PathVariable String fileName) {
        try {
            Path filePath = Paths.get(uploadDir).resolve(fileName).normalize();
            Resource resource = new UrlResource(filePath.toUri());

            if (resource.exists()) {
                return ResponseEntity.ok()
                        .contentType(MediaType.IMAGE_JPEG)
                        .body(resource);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<Image> getImageById(@PathVariable Long id) {
        Optional<Image> image = imageService.getImageById(id);
        return image.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).body(null));
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateImage(
            @PathVariable Long id,
            @RequestParam(value = "file", required = false) MultipartFile file,
            @RequestParam(value = "placeName", required = false) String placeName,
            @RequestParam(value = "country", required = false) String country,
            @RequestParam(value = "price", required = false) Double price
    ) {
        try {
            Image updatedImage = imageService.updateImage(id, file, placeName, country, price);
            return ResponseEntity.ok(updatedImage);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error updating image: " + e.getMessage());
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteImage(@PathVariable Long id) {
        return ResponseEntity.ok(imageService.deleteImage(id));
    }
}