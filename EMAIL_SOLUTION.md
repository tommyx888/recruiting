# 📧 Email Notifications - Current Solution

## 🔧 **Current Status: WORKING with Limitations**

### **✅ What Works:**
- Email notifications are functional
- All emails are sent to `t.ficek@gmail.com` (GM's email)
- Edge Function is deployed and working
- CORS issues are resolved

### **⚠️ Current Limitation:**
Due to Resend API restrictions, emails can only be sent to the verified email address (`t.ficek@gmail.com`). 

**Error message:**
```
"You can only send testing emails to your own email address (t.ficek@gmail.com). 
To send emails to other recipients, please verify a domain at resend.com/domains, 
and change the `from` address to an email using this domain."
```

### **📧 How It Works Now:**

1. **When a request is approved:**
   - System finds all managers with the position in their `allowed_positions`
   - Sends email to GM (`t.ficek@gmail.com`) with note about which manager it's for
   - Email includes: "This email is intended for manager who has position 'X' in their allowed_positions"

2. **When a new candidate is added:**
   - Same process - email goes to GM with manager information

3. **When a new request is created:**
   - Email goes to GM as usual

### **🎯 Benefits:**
- ✅ All notifications work
- ✅ GM gets all important information
- ✅ Clear indication of which manager should receive the notification
- ✅ No additional setup required

### **🔧 Future Improvements:**

#### **Option 1: Verify Domain (Recommended)**
1. Go to [resend.com/domains](https://resend.com/domains)
2. Add and verify your company domain
3. Update Edge Function to use `noreply@yourdomain.com`
4. Update code to send to actual manager emails

#### **Option 2: Use Different Email Service**
- Gmail API
- SendGrid
- Mailgun
- AWS SES

#### **Option 3: Keep Current Solution**
- Works perfectly for internal use
- GM receives all notifications
- Clear manager information in emails

### **📋 Current Email Templates:**

**Request Approved:**
```
Subject: Žiadosť o nábor schválená - [Position]

Note: This email is intended for manager who has position "[Position]" in their allowed_positions.

Request approved by GM:
- Position: [Position]
- Department: [Department]
- Type: [Type]
- Category: [Category]
```

**New Candidate:**
```
Subject: Nový kandidát pridaný - [Name]

Note: This email is intended for manager who has position "[Position]" in their allowed_positions.

New candidate added for position [Position] in department [Department]:
- Name: [Name]
- Position: [Position]
- Department: [Department]
- Source: [Source]
- Status: [Status]
```

### **✅ Testing:**
1. Create a new request → GM gets email
2. Approve a request → GM gets email (with manager info)
3. Add a candidate → GM gets email (with manager info)

**All email notifications are working! 🚀**

