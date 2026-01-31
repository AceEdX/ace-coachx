

## Add Password Visibility Toggle to Sign In Page

### Overview
Add eye icon buttons to toggle password visibility for all password fields on the sign-in page. Users will be able to click the eye icon to show/hide their password as they type.

### Changes Required

**File: `src/pages/SignIn.tsx`**

1. **Add visibility state variables:**
   - `showSignInPassword` - for sign-in form password
   - `showSignUpPassword` - for sign-up form password
   - `showConfirmPassword` - for confirm password field

2. **Import Eye icons from lucide-react:**
   - `Eye` - shown when password is hidden (click to reveal)
   - `EyeOff` - shown when password is visible (click to hide)

3. **Update password input fields:**
   - Wrap each password input in a `relative` div container
   - Change input `type` from static `"password"` to dynamic based on visibility state
   - Add an eye icon button positioned at the right side of the input
   - Toggle between `Eye` and `EyeOff` icons based on visibility state

4. **Fields to update:**
   - Sign In tab: Password field (line 136-143)
   - Sign Up tab: Password field (line 193-204)
   - Sign Up tab: Confirm Password field (line 208-215)

### Technical Details

```text
Password Input Structure:
+----------------------------------------+
| [Password text...             ] [Eye] |
+----------------------------------------+
```

- The eye icon button will be absolutely positioned inside the input container
- Button will have `type="button"` to prevent form submission
- Icon toggles between `Eye` (password hidden) and `EyeOff` (password visible)
- Input type toggles between `"password"` and `"text"`
- Proper padding added to input to prevent text overlapping with the icon

### Implementation Steps
1. Import `Eye` and `EyeOff` icons from `lucide-react`
2. Add three boolean state variables for password visibility
3. Create toggle buttons with eye icons for each password field
4. Wrap password inputs in relative containers
5. Conditionally set input type based on visibility state

