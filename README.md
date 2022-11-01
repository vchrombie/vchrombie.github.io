
# vchrombie.github.io
personal website

https://vchrombie.github.io

## Setup

1. Click the "Fork" button. You can change the repository name to `<username>.github.io` where `<username>` is your GitHub username.
2. Clone the repository to your local machine using the URL and navigate to the repository directory
```
git clone https://github.com/<username>/<username>.github.io
cd <username>.github.io
```
3. Create a new branch for your changes
```
git checkout -b main
```
4. Make changes to the files in the repository.. These could include adding or modifying static HTML files, images, or other assets.
5. You can set up a local web server and test your static site on your local machine. 
```
python -m http.server
```
6. Add and commit your changes to the repository
```
git add .
git commit -m "Finally joining the 21st century and learning how to make a static site"
```
7. Push your changes to your fork on GitHub
```
git push origin main
```
8. Go to the GitHub Pages settings for your fork and choose the branch you pushed (`main`) as the source for your GitHub Pages site.

That's it! Your static site should now be live on GitHub Pages. You can access it by going to `https://<username>.github.io/`.
