package com.example.spring_backend.service;


import com.example.spring_backend.entity.Image;
import com.example.spring_backend.repository.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.*;
import java.util.List;
import java.util.Optional;

@Service
public class ImageService {

    private final ImageRepository imageRepository;
    private final String uploadDir = "D:\\My Projects\\Spring Boot 1\\backend\\src\\main\\resources\\static\\ImageFolder";

    @Autowired
    public ImageService(ImageRepository imageRepository) {
        this.imageRepository = imageRepository;
    }

    public String saveImage(MultipartFile file, String placeName, String country, Double price) throws IOException {
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        Path uploadPath = Paths.get(uploadDir);

        if (!Files.exists(uploadPath)) {
            Files.createDirectories(uploadPath);
        }

        try (InputStream inputStream = file.getInputStream()) {
            Path filePath = uploadPath.resolve(fileName);
            Files.copy(inputStream, filePath, StandardCopyOption.REPLACE_EXISTING);
        }

        Image image = new Image();
        image.setFileName(fileName);
        image.setUploadDir(uploadDir);
        image.setPlaceName(placeName);
        image.setCountry(country);
        image.setPrice(price);
        imageRepository.save(image);

        return "File uploaded and saved successfully!";
    }

    public List<Image> getAllImages() {
        return imageRepository.findAll();
    }

    public Optional<Image> getImageById(Long id) {
        return imageRepository.findById(id);
    }

    public String deleteImage(Long id) {
        Optional<Image> imageOptional = imageRepository.findById(id);
        if (imageOptional.isPresent()) {
            Image image = imageOptional.get();
            imageRepository.delete(image);

            Path filePath = Paths.get(uploadDir, image.getFileName());
            try {
                Files.deleteIfExists(filePath);
                return "Image and file deleted successfully.";
            } catch (IOException e) {
                return "Failed to delete file, but record removed from database.";
            }
        } else {
            return "Image not found.";
        }
    }

    public Image updateImage(Long id, MultipartFile file, String placeName, String country, Double price) throws IOException {
        Optional<Image> optionalImage = imageRepository.findById(id);
        if (!optionalImage.isPresent()) {
            throw new RuntimeException("Image not found");
        }

        Image image = optionalImage.get();

        if (file != null && !file.isEmpty()) {
            String fileName = file.getOriginalFilename();
            saveImage(file, placeName, country, price);
            image.setFileName(fileName);
            image.setUploadDir(uploadDir);
        }

        if (placeName != null) {
            image.setPlaceName(placeName);
        }
        if (country != null) {
            image.setCountry(country);
        }
        if (price != null) {
            image.setPrice(price);
        }

        return imageRepository.save(image);
    }
}
