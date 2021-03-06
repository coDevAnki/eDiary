export const calender = [
  { name: "January", days: 31 },
  { name: "February", days: 28 },
  { name: "March", days: 31 },
  { name: "April", days: 30 },
  { name: "May", days: 31 },
  { name: "June", days: 30 },
  { name: "July", days: 31 },
  { name: "August", days: 31 },
  { name: "September", days: 30 },
  { name: "October", days: 31 },
  { name: "November", days: 30 },
  { name: "December", days: 31 },
];

export const getDateIndex = (givenMonth, givenDate) => {
  let date;
  if (givenMonth && givenDate) {
    date = new Date(2021, givenMonth, givenDate);
  } else date = new Date();
  return (
    calender.slice(0, date.getMonth()).reduce((acc, cur) => acc + cur.days, 0) +
    date.getDate()
  );
};

export const getDateHeader = (pageIndex) => {
  let daysCount = 0;
  for (let i = 0; i < calender.length; i++) {
    if (pageIndex <= daysCount) {
      date = daysCount - pageIndex;
      return;
    } else {
      month++;
      daysCount + calender[i].days;
    }
  }
};

export const dateStringList = [
  "Fri Jan 01 2021",
  "Sat Jan 02 2021",
  "Sun Jan 03 2021",
  "Mon Jan 04 2021",
  "Tue Jan 05 2021",
  "Wed Jan 06 2021",
  "Thu Jan 07 2021",
  "Fri Jan 08 2021",
  "Sat Jan 09 2021",
  "Sun Jan 10 2021",
  "Mon Jan 11 2021",
  "Tue Jan 12 2021",
  "Wed Jan 13 2021",
  "Thu Jan 14 2021",
  "Fri Jan 15 2021",
  "Sat Jan 16 2021",
  "Sun Jan 17 2021",
  "Mon Jan 18 2021",
  "Tue Jan 19 2021",
  "Wed Jan 20 2021",
  "Thu Jan 21 2021",
  "Fri Jan 22 2021",
  "Sat Jan 23 2021",
  "Sun Jan 24 2021",
  "Mon Jan 25 2021",
  "Tue Jan 26 2021",
  "Wed Jan 27 2021",
  "Thu Jan 28 2021",
  "Fri Jan 29 2021",
  "Sat Jan 30 2021",
  "Sun Jan 31 2021",
  "Mon Feb 01 2021",
  "Tue Feb 02 2021",
  "Wed Feb 03 2021",
  "Thu Feb 04 2021",
  "Fri Feb 05 2021",
  "Sat Feb 06 2021",
  "Sun Feb 07 2021",
  "Mon Feb 08 2021",
  "Tue Feb 09 2021",
  "Wed Feb 10 2021",
  "Thu Feb 11 2021",
  "Fri Feb 12 2021",
  "Sat Feb 13 2021",
  "Sun Feb 14 2021",
  "Mon Feb 15 2021",
  "Tue Feb 16 2021",
  "Wed Feb 17 2021",
  "Thu Feb 18 2021",
  "Fri Feb 19 2021",
  "Sat Feb 20 2021",
  "Sun Feb 21 2021",
  "Mon Feb 22 2021",
  "Tue Feb 23 2021",
  "Wed Feb 24 2021",
  "Thu Feb 25 2021",
  "Fri Feb 26 2021",
  "Sat Feb 27 2021",
  "Sun Feb 28 2021",
  "Mon Mar 01 2021",
  "Tue Mar 02 2021",
  "Wed Mar 03 2021",
  "Thu Mar 04 2021",
  "Fri Mar 05 2021",
  "Sat Mar 06 2021",
  "Sun Mar 07 2021",
  "Mon Mar 08 2021",
  "Tue Mar 09 2021",
  "Wed Mar 10 2021",
  "Thu Mar 11 2021",
  "Fri Mar 12 2021",
  "Sat Mar 13 2021",
  "Sun Mar 14 2021",
  "Mon Mar 15 2021",
  "Tue Mar 16 2021",
  "Wed Mar 17 2021",
  "Thu Mar 18 2021",
  "Fri Mar 19 2021",
  "Sat Mar 20 2021",
  "Sun Mar 21 2021",
  "Mon Mar 22 2021",
  "Tue Mar 23 2021",
  "Wed Mar 24 2021",
  "Thu Mar 25 2021",
  "Fri Mar 26 2021",
  "Sat Mar 27 2021",
  "Sun Mar 28 2021",
  "Mon Mar 29 2021",
  "Tue Mar 30 2021",
  "Wed Mar 31 2021",
  "Thu Apr 01 2021",
  "Fri Apr 02 2021",
  "Sat Apr 03 2021",
  "Sun Apr 04 2021",
  "Mon Apr 05 2021",
  "Tue Apr 06 2021",
  "Wed Apr 07 2021",
  "Thu Apr 08 2021",
  "Fri Apr 09 2021",
  "Sat Apr 10 2021",
  "Sun Apr 11 2021",
  "Mon Apr 12 2021",
  "Tue Apr 13 2021",
  "Wed Apr 14 2021",
  "Thu Apr 15 2021",
  "Fri Apr 16 2021",
  "Sat Apr 17 2021",
  "Sun Apr 18 2021",
  "Mon Apr 19 2021",
  "Tue Apr 20 2021",
  "Wed Apr 21 2021",
  "Thu Apr 22 2021",
  "Fri Apr 23 2021",
  "Sat Apr 24 2021",
  "Sun Apr 25 2021",
  "Mon Apr 26 2021",
  "Tue Apr 27 2021",
  "Wed Apr 28 2021",
  "Thu Apr 29 2021",
  "Fri Apr 30 2021",
  "Sat May 01 2021",
  "Sun May 02 2021",
  "Mon May 03 2021",
  "Tue May 04 2021",
  "Wed May 05 2021",
  "Thu May 06 2021",
  "Fri May 07 2021",
  "Sat May 08 2021",
  "Sun May 09 2021",
  "Mon May 10 2021",
  "Tue May 11 2021",
  "Wed May 12 2021",
  "Thu May 13 2021",
  "Fri May 14 2021",
  "Sat May 15 2021",
  "Sun May 16 2021",
  "Mon May 17 2021",
  "Tue May 18 2021",
  "Wed May 19 2021",
  "Thu May 20 2021",
  "Fri May 21 2021",
  "Sat May 22 2021",
  "Sun May 23 2021",
  "Mon May 24 2021",
  "Tue May 25 2021",
  "Wed May 26 2021",
  "Thu May 27 2021",
  "Fri May 28 2021",
  "Sat May 29 2021",
  "Sun May 30 2021",
  "Mon May 31 2021",
  "Tue Jun 01 2021",
  "Wed Jun 02 2021",
  "Thu Jun 03 2021",
  "Fri Jun 04 2021",
  "Sat Jun 05 2021",
  "Sun Jun 06 2021",
  "Mon Jun 07 2021",
  "Tue Jun 08 2021",
  "Wed Jun 09 2021",
  "Thu Jun 10 2021",
  "Fri Jun 11 2021",
  "Sat Jun 12 2021",
  "Sun Jun 13 2021",
  "Mon Jun 14 2021",
  "Tue Jun 15 2021",
  "Wed Jun 16 2021",
  "Thu Jun 17 2021",
  "Fri Jun 18 2021",
  "Sat Jun 19 2021",
  "Sun Jun 20 2021",
  "Mon Jun 21 2021",
  "Tue Jun 22 2021",
  "Wed Jun 23 2021",
  "Thu Jun 24 2021",
  "Fri Jun 25 2021",
  "Sat Jun 26 2021",
  "Sun Jun 27 2021",
  "Mon Jun 28 2021",
  "Tue Jun 29 2021",
  "Wed Jun 30 2021",
  "Thu Jul 01 2021",
  "Fri Jul 02 2021",
  "Sat Jul 03 2021",
  "Sun Jul 04 2021",
  "Mon Jul 05 2021",
  "Tue Jul 06 2021",
  "Wed Jul 07 2021",
  "Thu Jul 08 2021",
  "Fri Jul 09 2021",
  "Sat Jul 10 2021",
  "Sun Jul 11 2021",
  "Mon Jul 12 2021",
  "Tue Jul 13 2021",
  "Wed Jul 14 2021",
  "Thu Jul 15 2021",
  "Fri Jul 16 2021",
  "Sat Jul 17 2021",
  "Sun Jul 18 2021",
  "Mon Jul 19 2021",
  "Tue Jul 20 2021",
  "Wed Jul 21 2021",
  "Thu Jul 22 2021",
  "Fri Jul 23 2021",
  "Sat Jul 24 2021",
  "Sun Jul 25 2021",
  "Mon Jul 26 2021",
  "Tue Jul 27 2021",
  "Wed Jul 28 2021",
  "Thu Jul 29 2021",
  "Fri Jul 30 2021",
  "Sat Jul 31 2021",
  "Sun Aug 01 2021",
  "Mon Aug 02 2021",
  "Tue Aug 03 2021",
  "Wed Aug 04 2021",
  "Thu Aug 05 2021",
  "Fri Aug 06 2021",
  "Sat Aug 07 2021",
  "Sun Aug 08 2021",
  "Mon Aug 09 2021",
  "Tue Aug 10 2021",
  "Wed Aug 11 2021",
  "Thu Aug 12 2021",
  "Fri Aug 13 2021",
  "Sat Aug 14 2021",
  "Sun Aug 15 2021",
  "Mon Aug 16 2021",
  "Tue Aug 17 2021",
  "Wed Aug 18 2021",
  "Thu Aug 19 2021",
  "Fri Aug 20 2021",
  "Sat Aug 21 2021",
  "Sun Aug 22 2021",
  "Mon Aug 23 2021",
  "Tue Aug 24 2021",
  "Wed Aug 25 2021",
  "Thu Aug 26 2021",
  "Fri Aug 27 2021",
  "Sat Aug 28 2021",
  "Sun Aug 29 2021",
  "Mon Aug 30 2021",
  "Tue Aug 31 2021",
  "Wed Sep 01 2021",
  "Thu Sep 02 2021",
  "Fri Sep 03 2021",
  "Sat Sep 04 2021",
  "Sun Sep 05 2021",
  "Mon Sep 06 2021",
  "Tue Sep 07 2021",
  "Wed Sep 08 2021",
  "Thu Sep 09 2021",
  "Fri Sep 10 2021",
  "Sat Sep 11 2021",
  "Sun Sep 12 2021",
  "Mon Sep 13 2021",
  "Tue Sep 14 2021",
  "Wed Sep 15 2021",
  "Thu Sep 16 2021",
  "Fri Sep 17 2021",
  "Sat Sep 18 2021",
  "Sun Sep 19 2021",
  "Mon Sep 20 2021",
  "Tue Sep 21 2021",
  "Wed Sep 22 2021",
  "Thu Sep 23 2021",
  "Fri Sep 24 2021",
  "Sat Sep 25 2021",
  "Sun Sep 26 2021",
  "Mon Sep 27 2021",
  "Tue Sep 28 2021",
  "Wed Sep 29 2021",
  "Thu Sep 30 2021",
  "Fri Oct 01 2021",
  "Sat Oct 02 2021",
  "Sun Oct 03 2021",
  "Mon Oct 04 2021",
  "Tue Oct 05 2021",
  "Wed Oct 06 2021",
  "Thu Oct 07 2021",
  "Fri Oct 08 2021",
  "Sat Oct 09 2021",
  "Sun Oct 10 2021",
  "Mon Oct 11 2021",
  "Tue Oct 12 2021",
  "Wed Oct 13 2021",
  "Thu Oct 14 2021",
  "Fri Oct 15 2021",
  "Sat Oct 16 2021",
  "Sun Oct 17 2021",
  "Mon Oct 18 2021",
  "Tue Oct 19 2021",
  "Wed Oct 20 2021",
  "Thu Oct 21 2021",
  "Fri Oct 22 2021",
  "Sat Oct 23 2021",
  "Sun Oct 24 2021",
  "Mon Oct 25 2021",
  "Tue Oct 26 2021",
  "Wed Oct 27 2021",
  "Thu Oct 28 2021",
  "Fri Oct 29 2021",
  "Sat Oct 30 2021",
  "Sun Oct 31 2021",
  "Mon Nov 01 2021",
  "Tue Nov 02 2021",
  "Wed Nov 03 2021",
  "Thu Nov 04 2021",
  "Fri Nov 05 2021",
  "Sat Nov 06 2021",
  "Sun Nov 07 2021",
  "Mon Nov 08 2021",
  "Tue Nov 09 2021",
  "Wed Nov 10 2021",
  "Thu Nov 11 2021",
  "Fri Nov 12 2021",
  "Sat Nov 13 2021",
  "Sun Nov 14 2021",
  "Mon Nov 15 2021",
  "Tue Nov 16 2021",
  "Wed Nov 17 2021",
  "Thu Nov 18 2021",
  "Fri Nov 19 2021",
  "Sat Nov 20 2021",
  "Sun Nov 21 2021",
  "Mon Nov 22 2021",
  "Tue Nov 23 2021",
  "Wed Nov 24 2021",
  "Thu Nov 25 2021",
  "Fri Nov 26 2021",
  "Sat Nov 27 2021",
  "Sun Nov 28 2021",
  "Mon Nov 29 2021",
  "Tue Nov 30 2021",
  "Wed Dec 01 2021",
  "Thu Dec 02 2021",
  "Fri Dec 03 2021",
  "Sat Dec 04 2021",
  "Sun Dec 05 2021",
  "Mon Dec 06 2021",
  "Tue Dec 07 2021",
  "Wed Dec 08 2021",
  "Thu Dec 09 2021",
  "Fri Dec 10 2021",
  "Sat Dec 11 2021",
  "Sun Dec 12 2021",
  "Mon Dec 13 2021",
  "Tue Dec 14 2021",
  "Wed Dec 15 2021",
  "Thu Dec 16 2021",
  "Fri Dec 17 2021",
  "Sat Dec 18 2021",
  "Sun Dec 19 2021",
  "Mon Dec 20 2021",
  "Tue Dec 21 2021",
  "Wed Dec 22 2021",
  "Thu Dec 23 2021",
  "Fri Dec 24 2021",
  "Sat Dec 25 2021",
  "Sun Dec 26 2021",
  "Mon Dec 27 2021",
  "Tue Dec 28 2021",
  "Wed Dec 29 2021",
  "Thu Dec 30 2021",
  "Fri Dec 31 2021",
];
