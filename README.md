
# Frame by Frame - Every Frame Tells a Story

**Frame by Frame** is a fictional movie review platform designed to showcase the capabilities of AEM.live. It provides detailed analysis, reviews, and trivia on your favorite films. The images are sourced from TMDb for demonstration purposes only. This site is built for demonstration purposes and does not offer real movie reviews or commercial services.

## Project Overview

**Frame by Frame** serves as a demo site built with **AEM.live**, leveraging its capabilities to build a fast, scalable, and maintainable web application. The platform includes multiple pages, such as Home, Movies, Movie details and About us, and features a clean and responsive design optimized for performance and SEO.

## Environments

- **Preview**: [https://main--framebyframe--coder-hal9000.aem.page/](https://main--framebyframe--coder-hal9000.aem.page/)
- **Live**: [https://main--framebyframe--coder-hal9000.aem.live/](https://main--framebyframe--coder-hal9000.aem.live/)

## Approach

1. **Documentation Review**:  
   I began by reviewing the official [AEM.live documentation](https://www.aem.live/docs/), familiarizing myself with the platform and best practices for setting up a project.

2. **Content Creation**:  
   I used **Google Drive** to create content for the website pages, such as text and images. This content was then integrated into AEM.live using the appropriate page structures.

3. **Custom Blocks**:  
   A new block called **Movie Cards** was created to display clickable cards with movie posters.

4. **Tabs and Header Breadcrumbs**:  
   I added **new blocks** from block collection to handle dynamic tabbed content and header breadcrumbs to improve navigation and user experience.

5. **Data Indexing**:  
   Initially, I explored using **Google Sheets** for data indexing to get movie data. However, I ultimately decided against it, opting to ensure all content was directly available for search engine indexing.

6. **Google Analytics (GA4) Integration**:  
   I integrated **Google Analytics (GA4)** using **gtag.js** for tracking page views and events. Multiple approaches were tested to find the optimal solution for event tracking and performance.

## Challenges

1. **GA4 Script Performance Issue**:  
   Initially, I added the **GA4 script** with **lazy loading**, but it caused performance issues. To fix this, I delayed the script loading but started losing some event data.  
   - Solution: I implemented a queueing system to hold events until the **gtag** script was fully available, ensuring no events were missed. Additionally, I used **localStorage** to persist events until they could be sent.

2. **Page Content Structure**:  
   There were limited examples of how to structure page content in the AEM.live documentation, which required some exploration to understand the best practices for organizing and managing content. 

3. **AEM Sidekick Issues**:  
   I encountered occasional **AEM Sidekick** issues where it caused the browser to hang. The solution was to close the browser and disable the Sidekick when it wasn’t needed, or to open a few pages at once to minimize the issue.

4. **SEO Challenges**:  
   Ensuring proper **SEO** for the site was a bit tricky at first, especially with the data indexing and ensuring search engines could crawl all relevant content. In the end, I relied on standard SEO practices such as optimized meta tags and accessible HTML to improve the site’s SEO.

## Things to be Improved

1. **SEO Optimization**:  
   Currently, the **X-Robots-Tag** response header is set to `noindex, nofollow` due to the use of live and page preview sites. This prevents search engines from indexing the site. Hosting the site on a custom domain would help resolve this issue and allow the site to be indexed and followed by search engines.

2. **Analytics Tracking**:  
   The analytics tracking can be further improved by utilizing more advanced strategies and need to add consent management.

## Results

- **Core Web Vitals**: The website achieved **100% CWV scores** on PageSpeed Insights.

  - Home page - https://pagespeed.web.dev/analysis/https-main--framebyframe--coder-hal9000-aem-live/o6nbkc9l4o?form_factor=mobile
  - Movies page - https://pagespeed.web.dev/analysis/https-main--framebyframe--coder-hal9000-aem-live-movies/zqbfdmw80w?form_factor=mobile
  - Movie details page - https://pagespeed.web.dev/analysis/https-main--framebyframe--coder-hal9000-aem-live-movies-inception/k6pubwt1fw?form_factor=mobile
  - About us page - https://pagespeed.web.dev/analysis/https-main--framebyframe--coder-hal9000-aem-live-about-us/is16vvd6so?form_factor=mobile

  ![Mobile](https://private-user-images.githubusercontent.com/199352433/415982455-0d5b0cf8-f4f0-452e-9e3d-8279484da39b.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDAzMTE3NjYsIm5iZiI6MTc0MDMxMTQ2NiwicGF0aCI6Ii8xOTkzNTI0MzMvNDE1OTgyNDU1LTBkNWIwY2Y4LWY0ZjAtNDUyZS05ZTNkLTgyNzk0ODRkYTM5Yi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMjIzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDIyM1QxMTUxMDZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0xNmI3OWIzMDI3OWZmYjExODRkNThiMDgxMzYzNTE2MjQzZDM1NzE0Y2NiNzgwYTcwYzM5YmQ2NDJiZDZmNTkwJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.mmD6-DcqQ-885fEm6pSTnl0Woj7iLaeNoMvDy7y2_y0)
  ![Desktop](https://private-user-images.githubusercontent.com/199352433/415982460-8eb35cb3-a874-481c-8b43-71202439e8cb.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDAzMTE3NjYsIm5iZiI6MTc0MDMxMTQ2NiwicGF0aCI6Ii8xOTkzNTI0MzMvNDE1OTgyNDYwLThlYjM1Y2IzLWE4NzQtNDgxYy04YjQzLTcxMjAyNDM5ZThjYi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMjIzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDIyM1QxMTUxMDZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02OWM4ZjQ3M2IwZjc2M2I4Nzg2M2EzODg4ZDNjNTBhOTc0ZjBlOTMzYzBmNjhiYjAyZDIwN2VjZWU1NzRhMmYxJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.vzTXa1K3Mm5u073HXs64NfeFo29QA1mpzsM0hBhn1Mc)


- **Google Analytics Integration**: GA4 is successfully tracking page views and interactions. Event data is reliably sent to Google Analytics even after performance optimizations.

## Installation

To set up the project locally:

```sh
npm i
```

## Linting

To check for code quality issues:

```sh
npm run lint
```

## Local Development

1. Install the [AEM CLI](https://github.com/adobe/helix-cli): `npm install -g @adobe/aem-cli`.
2. Start AEM Proxy: `aem up` (opens your browser at `http://localhost:3000`).
3. Open the `{repo}` directory in your favorite IDE and start coding! 
