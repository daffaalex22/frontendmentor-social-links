# 🎬 anime.js Interactive Learning Project

![anime.js Animation Learning Project](./preview.jpg)

## Welcome! 🎯

This is an **interactive learning project** designed to teach anime.js animations through hands-on experimentation. Originally a social links profile, it has been transformed into a comprehensive animation tutorial.

**Perfect for students learning web animation and interactive JavaScript!**

## 🎓 Learning Objectives

This project teaches fundamental anime.js concepts through progressive, step-by-step animations:

### **Core Animation Concepts:**
- ✨ **Basic Animations**: Fade-in, slide, and scale effects
- 🎭 **Staggered Animations**: Coordinated multi-element animations
- 🎈 **Elastic Effects**: Bouncy, physics-based animations
- 🔄 **Rotation & Transform**: Complex property animations
- 🎨 **Color Transitions**: Smooth color interpolation

### **Interactive Features:**
- 📱 **Responsive Design**: Works on all device sizes
- 🎛️ **Step Selector**: Choose animation difficulty level
- 💻 **Live Code Viewer**: See JavaScript code in real-time
- 🎯 **Progressive Learning**: Build complexity gradually

## 🚀 How to Use

### **For Students:**
1. **Open the project** in your browser
2. **Use the dropdown** (top-right) to select animation steps
3. **Watch animations** play automatically
4. **View the code** in the bottom-right code viewer
5. **Experiment** with different values and see results

### **For Teachers:**
1. **Demonstrate concepts** using the step selector
2. **Show code patterns** with the live code viewer
3. **Explain timing** and easing functions
4. **Encourage experimentation** with different parameters

## 📁 Project Structure

```
├── index.html          # Main HTML structure
├── style.css           # All styling (including responsive)
├── script.js           # anime.js animations and interactivity
├── assets/             # Images and fonts
└── README.md           # This file
```

## 🎯 Animation Steps

| Step | Animation Type | What You Learn |
|------|---------------|----------------|
| 0 | No Animation | Static final state |
| 1 | Basic Fade-in | `opacity`, `translateY`, `duration` |
| 2 | Staggered Links | `anime.stagger()`, multiple targets |
| 3 | Elastic Scale | `scale`, `easeOutElastic` |
| 4 | Name Rotation | `rotate`, `delay` timing |
| 5 | Complete | All effects + color transitions |

## 🛠️ Technologies Used

- **HTML5** - Semantic structure
- **CSS3** - Modern styling with CSS variables
- **JavaScript ES6+** - Modern JavaScript features
- **anime.js v3.2.1** - Animation library
- **Responsive Design** - Mobile-first approach

## 📱 Responsive Features

- **Desktop (>768px)**: Controls in corners, maximum functionality
- **Tablet (≤768px)**: Centered controls, optimized spacing
- **Mobile (≤480px)**: Full-width controls, compact code viewer

## 🎓 Learning Path

### **Beginner Path:**
1. **Start with Step 0** - Understand the static layout
2. **Try Step 1** - Learn basic fade-in animations
3. **Experiment** with different `duration` and `easing` values
4. **Progress** through steps 2-5 as concepts build

### **Advanced Path:**
1. **Modify existing animations** - Change colors, timing, properties
2. **Add new animations** - Experiment with different anime.js features
3. **Create custom steps** - Add your own animation combinations
4. **Optimize performance** - Learn about animation efficiency

## 🎯 Key anime.js Concepts Demonstrated

### **Basic Properties:**
```javascript
opacity: [0, 1]           // Fade from transparent to visible
translateY: [50, 0]        // Move vertically
scale: [0, 1]             // Resize from small to large
rotate: [-5, 0]           // Rotate from angle to straight
```

### **Timing Control:**
```javascript
duration: 1000             // Animation length in milliseconds
delay: 500                // Wait before starting
anime.stagger(100)         // Delay between multiple elements
```

### **Easing Functions:**
```javascript
'easeOutQuad'              // Smooth deceleration
'easeOutExpo'              // Exponential slowdown
'easeOutElastic'           // Bouncy effect
'linear'                   // Constant speed
```

## 🛠️ Getting Started

### **Prerequisites:**
- Basic HTML and CSS knowledge
- Understanding of JavaScript fundamentals
- No prior anime.js experience required!

### **Setup:**
1. **Clone** this repository
2. **Open** `index.html` in your browser
3. **Start experimenting** with the animation selector
4. **Read** the code in the live code viewer
5. **Modify** values and see immediate results

## 📚 Educational Resources

### **Built-in Learning:**
- **Step-by-step progression** from simple to complex
- **Live code examples** with syntax highlighting
- **Interactive controls** for immediate feedback
- **Responsive design** demonstration

### **External Resources:**
- [anime.js Official Documentation](https://animejs.com/documentation/)
- [MDN Web Animation Guide](https://developer.mozilla.org/en-US/docs/Web/API/Animation)
- [CSS-Tricks Animation Guide](https://css-tricks.com/category/animation/)

## 🚀 Extending the Project

### **Ideas for Students:**
- **Add hover animations** to social links
- **Create page transitions** between different content
- **Implement physics-based** animations
- **Add sound effects** synchronized with animations
- **Build custom easing** functions

### **Advanced Challenges:**
- **Timeline animations** with complex sequences
- **SVG animations** for more complex graphics
- **Scroll-triggered** animations
- **Performance optimization** for smooth 60fps

## 🤝 Contributing

This is a learning project! Feel free to:
- **Fork** and experiment with new animations
- **Submit issues** for bugs or improvements
- **Suggest new learning steps** or features
- **Share your creations** built with this foundation

## 📄 License

This project is open source and available under the [MIT License](LICENSE). Feel free to use it for learning, teaching, or as a foundation for your own projects.

**Happy animating!** 🎬✨## Building your project

Feel free to use any workflow that you feel comfortable with. Below is a suggested process, but do not feel like you need to follow these steps:

1. Initialize your project as a public repository on [GitHub](https://github.com/). Creating a repo will make it easier to share your code with the community if you need help. If you're not sure how to do this, [have a read-through of this Try Git resource](https://try.github.io/).
2. Configure your repository to publish your code to a web address. This will also be useful if you need some help during a challenge as you can share the URL for your project with your repo URL. There are a number of ways to do this, and we provide some recommendations below.
3. Look through the designs to start planning out how you'll tackle the project. This step is crucial to help you think ahead for CSS classes to create reusable styles.
4. Before adding any styles, structure your content with HTML. Writing your HTML first can help focus your attention on creating well-structured content.
5. Write out the base styles for your project, including general content styles, such as `font-family` and `font-size`.
6. Start adding styles to the top of the page and work down. Only move on to the next section once you're happy you've completed the area you're working on.

## Deploying your project

As mentioned above, there are many ways to host your project for free. Our recommend hosts are:

- [GitHub Pages](https://pages.github.com/)
- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)

You can host your site using one of these solutions or any of our other trusted providers. [Read more about our recommended and trusted hosts](https://medium.com/frontend-mentor/frontend-mentor-trusted-hosting-providers-bf000dfebe).

## Create a custom `README.md`

We strongly recommend overwriting this `README.md` with a custom one. We've provided a template inside the [`README-template.md`](./README-template.md) file in this starter code.

The template provides a guide for what to add. A custom `README` will help you explain your project and reflect on your learnings. Please feel free to edit our template as much as you like.

Once you've added your information to the template, delete this file and rename the `README-template.md` file to `README.md`. That will make it show up as your repository's README file.

## Submitting your solution

Submit your solution on the platform for the rest of the community to see. Follow our ["Complete guide to submitting solutions"](https://medium.com/frontend-mentor/a-complete-guide-to-submitting-solutions-on-frontend-mentor-ac6384162248) for tips on how to do this.

Remember, if you're looking for feedback on your solution, be sure to ask questions when submitting it. The more specific and detailed you are with your questions, the higher the chance you'll get valuable feedback from the community.

## Sharing your solution

There are multiple places you can share your solution:

1. Share your solution page in the **#finished-projects** channel of our [community](https://www.frontendmentor.io/community). 
2. Tweet [@frontendmentor](https://twitter.com/frontendmentor) and mention **@frontendmentor**, including the repo and live URLs in the tweet. We'd love to take a look at what you've built and help share it around.
3. Share your solution on other social channels like LinkedIn.
4. Blog about your experience building your project. Writing about your workflow, technical choices, and talking through your code is a brilliant way to reinforce what you've learned. Great platforms to write on are [dev.to](https://dev.to/), [Hashnode](https://hashnode.com/), and [CodeNewbie](https://community.codenewbie.org/).

We provide templates to help you share your solution once you've submitted it on the platform. Please do edit them and include specific questions when you're looking for feedback. 

The more specific you are with your questions the more likely it is that another member of the community will give you feedback.

## Got feedback for us?

We love receiving feedback! We're always looking to improve our challenges and our platform. So if you have anything you'd like to mention, please email hi[at]frontendmentor[dot]io.

This challenge is completely free. Please share it with anyone who will find it useful for practice.

**Have fun building!** 🚀
