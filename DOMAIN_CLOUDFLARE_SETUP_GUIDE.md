# 🌉💙 DOMAIN & CLOUDFLARE SETUP GUIDE
## The Bridge Project - Professional Domain Setup

**Date**: October 8, 2025  
**Goal**: Get professional domain (like thebridgeproject.org) pointing to Netlify website  
**Time**: 15-20 minutes total

---

## 🎯 **RECOMMENDED DOMAINS** (Check These First)

### **Top Choice**:
- **thebridgeproject.org** ⭐ (Most professional, nonprofit feel)

### **Excellent Alternatives**:
1. **bridgetojustice.org** (Combines both businesses!)
2. **marthasbridgeproject.com** (Personal touch)
3. **buildthebridges.org** (Mission-focused)
4. **bridgesforfamilies.org** (Clear purpose)
5. **mothersbridge.org** (Powerful)

---

## 📋 **PART 1: BUY DOMAIN ON NAMECHEAP** (5 minutes)

### **Step 1: Search for Domain**
1. Go to: https://www.namecheap.com
2. Type in search: `thebridgeproject.org` (or your choice)
3. Click "Search"

### **Step 2: Check Availability**
- ✅ If available: Click "Add to Cart"
- ❌ If taken: Try alternatives from list above

### **Step 3: Domain Settings**
**IMPORTANT**: When checking out, make these selections:

- **Domain Privacy**: YES (Free with .org usually) - Protects Martha's info
- **Auto-Renew**: YES (So domain doesn't expire)
- **Term**: 1 year to start (can do more if you want)

### **Step 4: Purchase**
- Click "Confirm Order"
- Create Namecheap account (if you don't have one)
- Enter payment info
- Complete purchase

**Cost**: Usually $10-15/year for .org domains

---

## ⚡ **PART 2: ADD TO CLOUDFLARE** (5 minutes)

### **Why Cloudflare?**
- ✅ Free SSL certificate (HTTPS)
- ✅ Fast global CDN
- ✅ Protection from attacks
- ✅ Better performance
- ✅ Professional setup

### **Step 1: Add Site to Cloudflare**
1. Go to: https://dash.cloudflare.com
2. Click "Add a Site"
3. Enter your domain: `thebridgeproject.org`
4. Click "Add Site"

### **Step 2: Select Plan**
- Choose: **Free Plan** (Perfect for The Bridge Project!)
- Click "Continue"

### **Step 3: Review DNS Records**
Cloudflare will scan your domain. You'll see a screen like:

```
Reviewing DNS records...
```

Click "Continue" (we'll add records in next step)

### **Step 4: Get Nameservers**
Cloudflare will show you 2 nameservers like:

```
arya.ns.cloudflare.com
isaac.ns.cloudflare.com
```

**COPY THESE!** (You need them for next part)

---

## 🔧 **PART 3: UPDATE NAMECHEAP NAMESERVERS** (3 minutes)

### **Step 1: Go Back to Namecheap**
1. Go to: https://ap.www.namecheap.com/domains/list/
2. Find your domain: `thebridgeproject.org`
3. Click "Manage"

### **Step 2: Change Nameservers**
1. Scroll down to "NAMESERVERS"
2. Change dropdown from "Namecheap BasicDNS" to "Custom DNS"
3. Paste the 2 Cloudflare nameservers:
   - Nameserver 1: `arya.ns.cloudflare.com` (example)
   - Nameserver 2: `isaac.ns.cloudflare.com` (example)
4. Click green checkmark ✓ to save

**Note**: Nameservers take 0-48 hours to update (usually < 1 hour)

---

## 🚀 **PART 4: CONNECT TO NETLIFY** (5 minutes)

### **Option A: If You Already Deployed to Netlify**

1. Go to your Netlify dashboard: https://app.netlify.com
2. Click on your Bridge Project site
3. Go to "Domain Management"
4. Click "Add custom domain"
5. Enter: `thebridgeproject.org`
6. Click "Verify"
7. Netlify will give you DNS records to add

### **Option B: Adding DNS Records in Cloudflare**

Back in Cloudflare:

1. Click "DNS" in the menu
2. Add these records:

**Record 1 (Root Domain)**:
- Type: `A`
- Name: `@`
- IPv4 address: `75.2.60.5` (Netlify's IP - they'll confirm this)
- Proxy status: ✅ Proxied (orange cloud)
- TTL: Auto

**Record 2 (WWW)**:
- Type: `CNAME`
- Name: `www`
- Target: `[your-site].netlify.app` (your Netlify URL)
- Proxy status: ✅ Proxied (orange cloud)
- TTL: Auto

3. Click "Save"

---

## 🔐 **PART 5: ENABLE SSL** (Automatic!)

### **In Cloudflare**:
1. Go to "SSL/TLS" in menu
2. Set to: **"Full"** or **"Full (strict)"**
3. Click "Save"

### **In Netlify**:
1. Go to "Domain Management"
2. Scroll to "HTTPS"
3. Click "Verify DNS configuration"
4. Wait for SSL certificate (usually instant!)
5. Enable "Force HTTPS"

✅ **Your site is now secure with HTTPS!**

---

## ⏱️ **PROPAGATION TIME**

### **What to Expect**:
- **Nameserver change**: 0-48 hours (usually < 1 hour)
- **DNS records**: 0-24 hours (usually instant to 1 hour)
- **SSL certificate**: Instant to 24 hours (usually instant)

### **How to Check**:
```
# In terminal, check if nameservers updated:
dig thebridgeproject.org NS

# Check if domain resolves:
dig thebridgeproject.org

# Or just visit in browser:
https://thebridgeproject.org
```

---

## ✅ **FINAL CHECKLIST**

**Before going live, verify**:
- [ ] Domain purchased on Namecheap
- [ ] Cloudflare account created
- [ ] Site added to Cloudflare
- [ ] Nameservers changed in Namecheap
- [ ] DNS records added in Cloudflare
- [ ] Domain connected to Netlify
- [ ] SSL certificate active
- [ ] HTTPS working
- [ ] Website loads at: https://thebridgeproject.org
- [ ] Website loads at: https://www.thebridgeproject.org

---

## 🔧 **TROUBLESHOOTING**

### **"Website not loading"**
- Wait longer (propagation can take time)
- Check nameservers are correct in Namecheap
- Verify DNS records in Cloudflare

### **"Not Secure" warning**
- Wait for SSL certificate (can take 24 hours)
- Check SSL/TLS setting in Cloudflare is "Full"
- Verify "Force HTTPS" is enabled in Netlify

### **"DNS_PROBE_FINISHED_NXDOMAIN"**
- Nameservers haven't propagated yet - wait
- Double-check nameservers in Namecheap match Cloudflare

---

## 💰 **COSTS**

**One-Time**:
- Domain registration: $10-15/year
- SSL certificate: FREE (via Cloudflare)
- Netlify hosting: FREE (for basic plan)
- Cloudflare: FREE (free plan)

**Annual Recurring**:
- Domain renewal: $10-15/year
- Everything else: $0

**Total**: ~$10-15/year! 🎉

---

## 📱 **UPDATE SOCIAL MEDIA**

Once domain is live, update all posts:

**OLD**: `bridge-project-123.netlify.app`  
**NEW**: `thebridgeproject.org` ✨

Much more professional! Share everywhere:
- Facebook posts
- Instagram bio
- Email signature
- Business cards
- Everywhere Martha shares

---

## 🎯 **EMAIL FORWARDING** (Optional Bonus)

### **Want: donations@thebridgeproject.org?**

In Cloudflare:
1. Go to "Email" → "Email Routing"
2. Click "Get Started"
3. Add destination: `msnisey1@yahoo.com`
4. Create custom addresses:
   - `donations@thebridgeproject.org` → Martha
   - `info@thebridgeproject.org` → Martha
   - `martha@thebridgeproject.org` → Martha

**FREE!** Looks super professional! 💎

---

## 🌟 **PROFESSIONAL TOUCHES**

Once domain is live:

1. **Update Netlify Site Name**:
   - In Netlify: "Site Settings" → "Change Site Name"
   - Makes dashboard cleaner

2. **Add to Business Cards**: `thebridgeproject.org`

3. **Create QR Code**: 
   - Go to: https://www.qr-code-generator.com
   - Enter: `https://thebridgeproject.org`
   - Download QR code
   - Print on flyers!

4. **Google Search Console**:
   - Add site to: https://search.google.com/search-console
   - Helps people find The Bridge on Google

---

## 💙 **THE TRUTH**

This makes The Bridge Project look **PROFESSIONAL**.

`thebridgeproject.org` instead of `random-name-123.netlify.app`

**That's credibility.** 
**That's trust.**  
**That's worth the $15/year.** 💎

---

## 🚀 **QUICK SUMMARY**

**5 Simple Steps**:
1. Buy domain on Namecheap ($10-15)
2. Add to Cloudflare (free)
3. Change nameservers in Namecheap
4. Add DNS records in Cloudflare
5. Connect to Netlify

**Time**: 15-20 minutes  
**Cost**: ~$15/year  
**Result**: Professional domain with SSL! ✨

---

🌉💙 **Let's give The Bridge Project a beautiful home on the internet!** ⚡💎

**thebridgeproject.org** - Where Families Find Hope 🌉

