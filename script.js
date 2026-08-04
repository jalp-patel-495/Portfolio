// Project Data for Modals
const projectsData = {
    theater: {
        title: "Theater Management System",
        tech: ["Java", "OOP", "Console Application", "JSON DB"],
        desc: "A comprehensive console-based management suite designed for theater administrators and users, focusing on object-oriented programming principles in Java.",
        features: [
            "<strong>Ticket Booking System:</strong> Interactive seat layout selection, real-time ticket price calculations, and cancellation management.",
            "<strong>Food Court POS:</strong> Interactive digital menu for food items, integrated snack billing, and combined invoices.",
            "<strong>Employee Records:</strong> Roster management, role assignment (cashier, manager, usher), and salary tracking.",
            "<strong>Dual Access Modes:</strong> Password-protected administrative controls for inventory/movie schedules, and user mode for customers."
        ],
        github: "https://github.com/jalp-patel-495/TheaterManagmentSystem__Sem1-1"
    },
    bank: {
        title: "Bank Management System",
        tech: ["Java", "OOP", "Data Structures", "File Handling"],
        desc: "A secure console application that models banking processes, enabling customers to manage accounts and bank admins to run operations.",
        features: [
            "<strong>Account Management:</strong> Modular flow for creating, closing, and updating saving/checking accounts.",
            "<strong>Secure Transactions:</strong> Real-time validation for deposit, withdrawal, and peer-to-peer balance transfer transactions.",
            "<strong>Ledger Auditing:</strong> Structured local file logging to record transaction history and timestamp logs.",
            "<strong>Interest Calculator:</strong> Auto-computation of dynamic monthly interests based on balance categories."
        ],
        github: "https://github.com/jalp-patel-495/Bank_Management_Sem-2"
    },
    pharmacy: {
        title: "Pharmacy Management System",
        tech: ["Java", "File I/O", "CRUD Operations", "Algorithms"],
        desc: "A software solution targeting pharmaceutical businesses, automating inventory tracking, medical sales logs, and distributor relations.",
        features: [
            "<strong>Medicine Stock Manager:</strong> Complete CRUD utilities for drug lists, categorized by chemical composition and distributor.",
            "<strong>Billing Engine:</strong> Quick checkout terminal computing discount scales, tax components, and receipts.",
            "<strong>Reorder Notifications:</strong> Integrated check warnings when stock drops below threshold values.",
            "<strong>Customer Ledger:</strong> Contact registers and prescription log archiving."
        ],
        github: "https://github.com/jalp-patel-495/Pharmacy-Management-System"
    },
    clothing: {
        title: "Online Clothing Store Management",
        tech: ["Python", "OOP", "CSV Database", "Validation"],
        desc: "An application mapping the core workflows of an e-commerce clothing brand, offering customer catalog browsing and admin product management.",
        features: [
            "<strong>Catalog Cataloguing:</strong> Dynamic item listing by categories (shirts, jeans, accessories), sizes, and colors.",
            "<strong>Shopping Cart POS:</strong> In-memory cart mapping adding/removing goods and managing promotional coupons.",
            "<strong>Order Despatching:</strong> Order database archiving with progress logs (Pending, Dispatched, Shipped).",
            "<strong>User Authentication:</strong> Secure password hashing simulation and personal order histories."
        ],
        github: "https://github.com/jalp-patel-495/Online_Clothing_Store_Management"
    },
    guessing: {
        title: "Number Guessing Game",
        tech: ["Python", "Algorithms", "Randomization"],
        desc: "An interactive CLI game showcasing Python scripts, random generators, logic checks, and variable constraints.",
        features: [
            "<strong>Variable Difficulty:</strong> Play with custom spans (1-50, 1-100, 1-500) and attempts.",
            "<strong>High Scores Board:</strong> Locally cached file storing lowest guesses and player names.",
            "<strong>Real-time Clues:</strong> Smart hints advising player if their guess is too low, high, or close."
        ],
        github: "https://github.com/jalp-patel-495/Number-Guessing-Game-with-Python"
    }
};

document.addEventListener("DOMContentLoaded", () => {
    // 1. Typing Animation
    const typedTextSpan = document.querySelector(".typed-text");
    const roles = ["Computer Engineering Student", "Software Developer", "Full Stack Developer", "UI/UX Developer", "Java & Python Programmer"];
    const typingSpeed = 100;
    const erasingSpeed = 60;
    const newWordDelay = 2000;
    let roleIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < roles[roleIndex].length) {
            typedTextSpan.textContent += roles[roleIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(erase, newWordDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typedTextSpan.textContent = roles[roleIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingSpeed);
        } else {
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(type, typingSpeed + 300);
        }
    }

    if (typedTextSpan) {
        setTimeout(type, 1000);
    }

    // 2. Navbar Scroll Style & Active Navigation Link
    const navbar = document.querySelector(".navbar");
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {
        // Change navbar size & bg on scroll
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

        // Highlight active navbar link
        let currentSection = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 150)) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("active");
            }
        });
    });

    // 3. Mobile Navigation Menu Toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinksList = document.querySelector(".nav-links");

    if (menuToggle && navLinksList) {
        menuToggle.addEventListener("click", () => {
            navLinksList.classList.toggle("active");
            // Toggle hamburger icon animation
            const spans = menuToggle.querySelectorAll("span");
            spans[0].style.transform = navLinksList.classList.contains("active") ? "rotate(45deg) translate(5px, 5px)" : "none";
            spans[1].style.opacity = navLinksList.classList.contains("active") ? "0" : "1";
            spans[2].style.transform = navLinksList.classList.contains("active") ? "rotate(-45deg) translate(5px, -5px)" : "none";
        });

        // Close menu on link click
        navLinksList.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navLinksList.classList.remove("active");
                const spans = menuToggle.querySelectorAll("span");
                spans[0].style.transform = "none";
                spans[1].style.opacity = "1";
                spans[2].style.transform = "none";
            });
        });
    }

    // 4. Modal Triggers
    const modalOverlay = document.getElementById("project-modal");
    const modalClose = document.querySelector(".modal-close");
    const modalTitle = document.querySelector(".modal-title");
    const modalTech = document.querySelector(".modal-tech");
    const modalDesc = document.querySelector(".modal-desc");
    const modalFeaturesList = document.querySelector(".modal-features");
    const modalGithubLink = document.querySelector(".modal-github-link");
    const projectCards = document.querySelectorAll(".project-card");

    function openModal(projectId) {
        const data = projectsData[projectId];
        if (!data) return;

        // Set content
        modalTitle.textContent = data.title;
        
        // Set technology tags
        modalTech.innerHTML = "";
        data.tech.forEach(tech => {
            const span = document.createElement("span");
            span.className = "tech-tag";
            span.textContent = tech;
            modalTech.appendChild(span);
        });

        modalDesc.textContent = data.desc;

        // Set bullet points features
        modalFeaturesList.innerHTML = "";
        data.features.forEach(feature => {
            const li = document.createElement("li");
            li.innerHTML = feature;
            modalFeaturesList.appendChild(li);
        });

        // Set Github button href
        modalGithubLink.href = data.github;

        // Show Modal
        modalOverlay.classList.add("active");
        document.body.style.overflow = "hidden"; // Disable background scrolling
    }

    function closeModal() {
        modalOverlay.classList.remove("active");
        document.body.style.overflow = ""; // Re-enable background scrolling
    }

    projectCards.forEach(card => {
        card.addEventListener("click", (e) => {
            // Prevent modal opening when clicking direct links in the card header
            if (e.target.closest(".project-links") || e.target.closest("a")) {
                return;
            }
            const projectId = card.getAttribute("data-id");
            openModal(projectId);
        });
    });

    if (modalClose) {
        modalClose.addEventListener("click", closeModal);
    }

    if (modalOverlay) {
        modalOverlay.addEventListener("click", (e) => {
            if (e.target === modalOverlay) {
                closeModal();
            }
        });
    }

    // Close on Escape key press
    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modalOverlay.classList.contains("active")) {
            closeModal();
        }
    });

    // 5. Contact Form Validator & Handler
    const contactForm = document.getElementById("contact-form");
    const formStatus = document.querySelector(".form-status");

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (!name || !email || !message) {
                showStatus("Please fill in all the input fields.", "error");
                return;
            }

            if (!validateEmail(email)) {
                showStatus("Please enter a valid email address.", "error");
                return;
            }

            // Simulate form submission
            showStatus("Sending message...", "");
            const submitBtn = contactForm.querySelector(".form-submit-btn");
            const originalText = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = "Sending...";

            setTimeout(() => {
                showStatus("Thank you! Your message has been sent successfully.", "success");
                contactForm.reset();
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
            }, 1500);
        });
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function showStatus(msg, type) {
        formStatus.textContent = msg;
        formStatus.className = "form-status"; // Reset class list
        if (type === "success") {
            formStatus.classList.add("success");
        } else if (type === "error") {
            formStatus.classList.add("error");
        }
        formStatus.style.display = "block";
    }

    // 6. Interactive 3D Card Tilt Effect
    const tiltElements = document.querySelectorAll(".project-card, .skills-category, .about-card, .hero-img-outline");
    
    tiltElements.forEach(elem => {
        elem.addEventListener("mousemove", (e) => {
            const rect = elem.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Maximum tilt angle of 12 degrees
            const rotateX = ((centerY - y) / centerY) * 12;
            const rotateY = ((x - centerX) / centerX) * 12;
            
            // Set custom properties for holographic glare
            elem.style.setProperty('--mouse-x', `${x}px`);
            elem.style.setProperty('--mouse-y', `${y}px`);
            
            elem.style.transition = "transform 0.1s ease, border-color 0.3s ease, box-shadow 0.3s ease";
            elem.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });
        
        elem.addEventListener("mouseleave", () => {
            elem.style.transition = "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), border-color 0.3s ease, box-shadow 0.3s ease";
            elem.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
        });
    });

    // 7. Interactive 3D Plexus Constellation Network (Full Page Cover)
    const canvas = document.getElementById("canvas-3d");
    if (canvas) {
        const ctx = canvas.getContext("2d");
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;
        
        let mouseX = 0;
        let mouseY = 0;
        let targetMouseX = 0;
        let targetMouseY = 0;
        
        const trailParticles = [];
        const colors = [
            'rgba(0, 242, 254, ',   // Neon Cyan
            'rgba(79, 172, 254, ',   // Electric Blue
            'rgba(127, 90, 240, '    // Cyber Purple
        ];
        
        window.addEventListener("mousemove", (e) => {
            // Target coordinates relative to center of screen
            targetMouseX = e.clientX;
            targetMouseY = e.clientY;
            
            // Emit glowing trail particles
            if (Math.random() < 0.45) {
                trailParticles.push({
                    x: e.clientX,
                    y: e.clientY,
                    vx: (Math.random() - 0.5) * 3,
                    vy: (Math.random() - 0.5) * 3 - 0.5,
                    size: Math.random() * 8 + 4,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    alpha: 0.8
                });
            }
        });
        
        window.addEventListener("resize", () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        });
        
        // 3D Node class
        class Node3D {
            constructor(x, y, z) {
                this.x = x;
                this.y = y;
                this.z = z;
                
                // Random drift velocities
                this.vx = (Math.random() - 0.5) * 0.4;
                this.vy = (Math.random() - 0.5) * 0.4;
                this.vz = (Math.random() - 0.5) * 0.4;
            }
            
            update() {
                // Apply constant slow drift
                this.x += this.vx;
                this.y += this.vy;
                this.z += this.vz;
                
                // Wrap coordinates to keep particles in volume bounds
                const boundaryX = width / 1.5;
                const boundaryY = height / 1.5;
                const boundaryZ = 300;
                
                if (Math.abs(this.x) > boundaryX) this.vx *= -1;
                if (Math.abs(this.y) > boundaryY) this.vy *= -1;
                if (Math.abs(this.z) > boundaryZ) this.vz *= -1;
            }
            
            rotateX(angle) {
                const cos = Math.cos(angle);
                const sin = Math.sin(angle);
                const y1 = this.y * cos - this.z * sin;
                const z1 = this.y * sin + this.z * cos;
                this.y = y1;
                this.z = z1;
            }
            
            rotateY(angle) {
                const cos = Math.cos(angle);
                const sin = Math.sin(angle);
                const x1 = this.x * cos - this.z * sin;
                const z1 = this.x * sin + this.z * cos;
                this.x = x1;
                this.z = z1;
            }
        }
        
        // Setup constellation nodes (110 nodes distributed in the 3D volume)
        const numNodes = 110;
        const nodes = [];
        for (let i = 0; i < numNodes; i++) {
            nodes.push(new Node3D(
                (Math.random() - 0.5) * width,
                (Math.random() - 0.5) * height,
                (Math.random() - 0.5) * 600
            ));
        }
        
        const focalLength = 380;
        const cameraDist = 400;
        
        function animate() {
            ctx.clearRect(0, 0, width, height);
            
            // Smooth mouse follow easing
            mouseX += (targetMouseX - mouseX) * 0.05;
            mouseY += (targetMouseY - mouseY) * 0.05;
            
            // Camera tilt angles based on mouse offset from center
            const angleY = (mouseX - width / 2) * 0.0003;
            const angleX = (mouseY - height / 2) * 0.0003;
            
            // Update, rotate and project all nodes
            const projected = nodes.map(node => {
                node.update();
                
                // Copy coordinates to rotate
                const temp = new Node3D(node.x, node.y, node.z);
                
                // Continuous slow background orbit rotation
                temp.rotateY(0.0002);
                temp.rotateX(0.0001);
                
                // Apply camera offset coordinates
                temp.rotateY(angleY);
                temp.rotateX(angleX);
                
                // Interaction: repulse nodes from cursor in 3D projected coordinates
                const scale = focalLength / (focalLength + temp.z + cameraDist);
                const rawX = temp.x * scale + width / 2;
                const rawY = temp.y * scale + height / 2;
                
                let screenX = rawX;
                let screenY = rawY;
                
                const dx = mouseX - rawX;
                const dy = mouseY - rawY;
                const distToMouse = Math.sqrt(dx * dx + dy * dy);
                
                if (distToMouse < 180) {
                    const force = (180 - distToMouse) / 180;
                    // Push nodes away from mouse coordinates
                    screenX -= dx * force * 0.15;
                    screenY -= dy * force * 0.15;
                }
                
                return {
                    x: screenX,
                    y: screenY,
                    z: temp.z,
                    scale: scale
                };
            });
            
            // Draw connection plexus lines
            ctx.lineWidth = 0.5;
            for (let i = 0; i < projected.length; i++) {
                for (let j = i + 1; j < projected.length; j++) {
                    const p1 = projected[i];
                    const p2 = projected[j];
                    
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    
                    // Draw a link if nodes are close in 2D and 3D
                    if (dist < 135) {
                        const alpha = (1 - dist / 135) * 0.18 * p1.scale;
                        ctx.strokeStyle = `rgba(0, 242, 254, ${alpha})`;
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            }
            
            // Draw node circles
            projected.forEach(p => {
                const radius = Math.max(0.6, p.scale * 2.2);
                const alpha = Math.min(0.6, Math.max(0.05, (300 - p.z) / 600));
                
                ctx.fillStyle = `rgba(79, 172, 254, ${alpha})`;
                ctx.beginPath();
                ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
                ctx.fill();
            });
            
            // Draw mouse trail particles
            for (let i = trailParticles.length - 1; i >= 0; i--) {
                const p = trailParticles[i];
                p.x += p.vx;
                p.y += p.vy;
                p.alpha -= 0.016; // Fades out
                p.size *= 0.95;   // Shrinks
                
                if (p.alpha <= 0 || p.size <= 0.5) {
                    trailParticles.splice(i, 1);
                    continue;
                }
                
                ctx.save();
                ctx.fillStyle = p.color + p.alpha + ')';
                ctx.shadowBlur = 8;
                ctx.shadowColor = 'rgba(0, 242, 254, 0.4)';
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }
            
            requestAnimationFrame(animate);
        }
        
        animate();
    }

    // 8. Step-by-Step Scroll Reveal Animation
    const revealElements = document.querySelectorAll(".project-card, .about-card, .skills-category");
    
    if ("IntersectionObserver" in window) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const parentGrid = entry.target.parentElement;
                    const siblings = parentGrid ? Array.from(parentGrid.children) : [];
                    const index = siblings.indexOf(entry.target);
                    const delay = index >= 0 ? index * 140 : 0; // Staggered 140ms step-by-step delay
                    
                    setTimeout(() => {
                        entry.target.classList.add("visible");
                    }, delay);

                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

        revealElements.forEach(el => revealObserver.observe(el));
    } else {
        revealElements.forEach(el => el.classList.add("visible"));
    }
});
