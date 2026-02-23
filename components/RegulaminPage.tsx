
import React from 'react';

export const RegulaminPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a1a14] text-white p-8 md:p-20 font-['Plus_Jakarta_Sans']">
      <div className="max-w-4xl mx-auto">
        {/* Nagłówek */}
        <div className="mb-12">
          <h1 className="text-4xl font-black mb-4 uppercase tracking-tighter">
            Regulamin <span className="text-[#8ab925]">Serwisu</span>
          </h1>
          <div className="text-gray-400 text-sm space-y-1 mb-2">
            <p className="font-bold text-white">Elomoto Sp. z o.o.</p>
            <p>Tel. <a href="tel:+48222692022" className="hover:text-[#8ab925] transition-colors">222 692 022</a></p>
            <p>e-mail: <a href="mailto:biuro@elomoto.com" className="hover:text-[#8ab925] transition-colors">biuro@elomoto.com</a></p>
            <p>Czereśniowa 98, 02-456 Warszawa</p>
          </div>
        </div>

        <section className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl space-y-10">

          {/* WSTĘP */}
          <div className="space-y-3">
            <h2 className="text-lg font-black text-[#8ab925] uppercase tracking-widest">Wstęp</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Realizując postanowienia Ustawy z dnia 18 lipca 2002 r. o świadczeniu usług drogą elektroniczną (Dz.U. z 2013 r. poz. 1422 z późn. zm.), Rozporządzenia Ogólnego o Ochronie Danych Osobowych, w skrócie „RODO" (Rozporządzenie PE i Rady UE 2016/679 z dnia 27 kwietnia 2016 r. ws. ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE), ustawy z dnia 16 lipca 2004 roku prawo telekomunikacyjne (Dz.U. z 2014 r. poz. 243 z późn. zm.), Elomoto Sp. z o.o. zwana w dalszej części Regulaminu „Usługodawcą", z siedzibą w Warszawie ul. Czereśniowa 98 lok. 117, 02-456 Warszawa wprowadza niniejszy Regulamin określający w szczególności rodzaje i zakres świadczonych usług drogą elektroniczną, warunki świadczenia tych usług, w tym wymagania techniczne oraz zakazy dostarczania treści bezprawnych, politykę prywatności, warunki zawierania i rozwiązywania umów o świadczenie usług drogą elektroniczną oraz warunki przesyłania informacji handlowej.
            </p>
          </div>

          {/* Rozdział 1 */}
          <div className="space-y-4">
            <h2 className="text-lg font-black text-[#8ab925] uppercase tracking-widest">Rozdział 1. Postanowienia ogólne</h2>
            <p className="text-gray-300 text-sm font-semibold">Definicje pojęć użytych w Regulaminie:</p>
            <ul className="list-disc pl-5 text-gray-300 text-sm space-y-3 leading-relaxed">
              <li><strong className="text-white">Ustawa</strong> – Ustawa o świadczeniu usług drogą elektroniczną z dnia 18 lipca 2002 r. (Dz.U. z 2013 r. poz. 1422 ze. zm.).</li>
              <li><strong className="text-white">System teleinformatyczny</strong> – zespół współpracujących ze sobą urządzeń informatycznych i oprogramowania, zapewniający przetwarzanie i przechowywanie, a także wysyłanie i odbieranie danych poprzez sieci telekomunikacyjne za pomocą właściwego dla danego rodzaju sieci urządzenia końcowego w rozumieniu prawa telekomunikacyjnego.</li>
              <li><strong className="text-white">Usługi świadczone drogą elektroniczną</strong> – usługi, których wykonanie następuje przez wysyłanie i odbieranie danych za pomocą systemów teleinformatycznych, na indywidualne żądanie Usługobiorcy, bez jednoczesnej obecności stron, przy czym dane te są transmitowane za pośrednictwem sieci publicznych w rozumieniu prawa telekomunikacyjnego.</li>
              <li><strong className="text-white">Środki komunikacji elektronicznej</strong> – rozwiązania techniczne, w tym urządzenia teleinformatyczne i współpracujące z nimi narzędzia programowe, umożliwiające indywidualne porozumiewanie się na odległość przy wykorzystaniu transmisji danych między systemami teleinformatycznymi, a w szczególności pocztę elektroniczną.</li>
              <li><strong className="text-white">Usługodawca</strong> – Elomoto Sp. z o.o. z siedzibą w Warszawie ul. Czereśniowa 98 lok. 117, 02-456 Warszawa.</li>
              <li><strong className="text-white">Usługobiorca</strong> – podmiot korzystający z usług Usługodawcy, który jest stroną umowy o świadczeniu usług będący osobą fizyczną, osobą prawną albo jednostką organizacyjną nie posiadającą osobowości prawnej, który zobowiąże się do przestrzegania niniejszego Regulaminu. Usługobiorcą jest również podmiot, który zamówi świadczenie określonych usług drogą elektroniczną na zasadach poniżej określonych.</li>
            </ul>
            <p className="text-gray-300 text-sm leading-relaxed">
              Usługodawca świadczy usługi drogą elektroniczną pod adresami: www.elomoto.eco, energomix.com, www.cefo.pl, www.cefen.pl, www.cepel.pl.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Wyrażenie zgody na przestrzeganie niniejszego Regulaminu przy uruchamianiu usługi dostępnej na ww. stronach internetowych jest równoznaczne z pełną akceptacją warunków Regulaminu bez konieczności sporządzenia odrębnej umowy.
            </p>
          </div>

          {/* Rozdział 2 */}
          <div className="space-y-4">
            <h2 className="text-lg font-black text-[#8ab925] uppercase tracking-widest">Rozdział 2. Rodzaje i zakres świadczonych usług drogą elektroniczną</h2>
            <p className="text-gray-300 text-sm leading-relaxed">Usługodawca świadczy usługi drogą elektroniczną, a w szczególności:</p>
            <ul className="list-disc pl-5 text-gray-300 text-sm space-y-3 leading-relaxed">
              <li>Usługę „Formularza kontaktowego". Usługodawca nie ponosi odpowiedzialności za ewentualne szkody jakie może ponieść Usługobiorca w związku ze świadczoną usługą „Formularza kontaktowego".</li>
              <li>Pytania można przesyłać za pośrednictwem formularza kontaktowego. Przesłanie formularza z zapytaniem jest możliwe jedynie po wyrażeniu przez Usługobiorcę zgody na przetwarzanie danych osobowych dla tego celu, zgody na przetwarzanie danych osobowych do celów marketingowych oraz podanie imienia i nazwiska, numeru telefonu oraz adresu poczty elektronicznej.</li>
              <li>Usługodawca dołoży staranności aby udzielić odpowiedzi na pytanie w terminie nie dłuższym niż 48 godzin z wyłączeniem dni ustawowo wolnych od pracy oraz sobót.</li>
              <li>„Formularz kontaktowy" jest to udzielanie bezpłatnych i płatnych informacji w zakresie tematyki związanej ze stroną internetową Usługodawcy.</li>
              <li>Usługodawca świadczy usługę polegającą na udzielaniu odpowiedzi na pytania z zakresu bezpieczeństwa informacji w tym ochrony danych osobowych.</li>
              <li>Usługodawca zastrzega, że może zlecić udzielanie odpowiedzi na przesłane pytania podmiotowi trzeciemu. Usługodawca oświadcza iż podmiot, któremu wykonanie tej usługi będzie zlecane, będzie wybierany z zachowaniem należytej staranności oraz z tym zastrzeżeniem, że osoby udzielające odpowiedzi będą posiadały szeroką wiedzę z zakresu przedmiotowych zagadnień.</li>
              <li>Usługodawca może świadczyć również usługi na podstawie odrębnych umów, których przedmiotem jest świadczenie usług drogą elektroniczną.</li>
            </ul>
          </div>

          {/* Rozdział 3 */}
          <div className="space-y-4">
            <h2 className="text-lg font-black text-[#8ab925] uppercase tracking-widest">Rozdział 3. Warunki świadczenia usług drogą elektroniczną</h2>
            <ul className="list-disc pl-5 text-gray-300 text-sm space-y-3 leading-relaxed">
              <li>Usługodawca świadczy usługi na rzecz Usługobiorcy w zakresie i na warunkach określonych w niniejszym Regulaminie lub indywidualnej ofercie, jeśli taka została złożona i przyjęta przez Usługobiorcę.</li>
              <li>Usługobiorca zobowiązuje się do przestrzegania niniejszego Regulaminu.</li>
              <li>Usługobiorca obowiązany jest do korzystania ze strony internetowej Usługodawcy w sposób zgodny z prawem z poszanowaniem dóbr osobistych oraz praw autorskich i własności intelektualnej Usługodawcy oraz osób trzecich.</li>
              <li>Usługobiorca zobowiązany jest do przestrzegania zakazu nadużywania środków komunikacji elektronicznej oraz nie dostarczania przez lub do systemów teleinformatycznych Usługodawcy następujących treści:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>powodujących zachwianie pracy lub przeciążenie systemów teleinformatycznych Usługodawcy lub innych podmiotów biorących bezpośredni lub pośredni udział w świadczeniu usług drogą elektroniczną,</li>
                  <li>naruszających dobra osób trzecich, ogólnie przyjęte normy społeczne lub niezgodnych z powszechnie obowiązującymi przepisami prawa.</li>
                </ul>
              </li>
              <li>Usługodawca zastrzega sobie prawo do prowadzenia prac konserwacyjnych systemu teleinformatycznego, mogących powodować utrudnienia lub uniemożliwienie Usługobiorcom korzystania z usług.</li>
              <li>W przypadkach szczególnych mających wpływ na bezpieczeństwo lub stabilność systemu teleinformatycznego, Usługodawca ma prawo do czasowego zaprzestania lub ograniczenia świadczenia usług, bez wcześniejszego powiadomienia i przeprowadzenia prac konserwacyjnych mających na celu przywrócenie bezpieczeństwa i stabilności systemu teleinformatycznego.</li>
              <li>Usługodawca zapewnia Usługobiorcom iż podane przez nich dane osobowe zostaną przez Usługodawcę zachowane w tajemnicy która obejmuje informacje przekazywane w publicznej sieci Internet, a dotyczące i wprowadzone przez Usługobiorców tylko w obrębie systemu teleinformatycznego Usługodawcy i tylko w przypadku, w którym informacje te nie są publicznie dostępne lub ich ujawnienie nie jest niezbędne dla prawidłowego świadczenia usługi, której dotyczą.</li>
              <li>Informacje przekazywane przez Usługobiorców mogą zostać ujawnione jedynie za uprzednią zgodą Usługobiorcy lub w przypadku gdy obowiązek taki wynika z obowiązujących przepisów prawa.</li>
              <li>Usługodawca rozpatruje reklamacje w terminie 14 dni, licząc od dnia jej wniesienia. Jeśli reklamacja w tym czasie nie może zostać rozpatrzona, Usługodawca w tym terminie powiadamia reklamującego na piśmie o przyczynach opóźnienia i przewidywanym terminie rozpatrzenia reklamacji.</li>
              <li>Usługobiorca obowiązany jest do wprowadzania danych zgodnych ze stanem faktycznym.</li>
              <li>Reklamacje związane ze świadczeniem Usług Elektronicznych przez Usługodawcę można składać pisemnie na adres Usługodawcy lub w formie elektronicznej za pośrednictwem poczty elektronicznej na adres: <a href="mailto:biuro@elomoto.eco" className="text-[#8ab925] hover:underline">biuro@elomoto.eco</a>. Zaleca się podanie przez Usługobiorcę w opisie reklamacji: informacji i okoliczności dotyczących przedmiotu reklamacji, w szczególności rodzaju i daty wystąpienia nieprawidłowości; żądania Usługobiorcy oraz danych kontaktowych składającego reklamację.</li>
              <li>Ustosunkowanie się do reklamacji przez Usługodawcę następuje niezwłocznie, nie później niż w terminie 14 dni kalendarzowych od dnia jej złożenia.</li>
            </ul>
          </div>

          {/* Rozdział 4 */}
          <div className="space-y-4">
            <h2 className="text-lg font-black text-[#8ab925] uppercase tracking-widest">Rozdział 4. Polityka Prywatności</h2>
            <ul className="list-disc pl-5 text-gray-300 text-sm space-y-3 leading-relaxed">
              <li>Zgodnie z art. 13 ust. 1 ogólnego rozporządzenia o ochronie danych osobowych z dnia 27 kwietnia 2016 r. (RODO), informujemy, iż administratorem Pani/Pana danych osobowych jest Elomoto Sp. z o.o. z siedzibą przy ul. Czereśniowa 98, 02-456 Warszawa.</li>
              <li>Pani/Pana dane osobowe przetwarzane będą w zakresie podanym przez Panią/Pana za pośrednictwem formularzy zgłoszeniowych i innych form kontaktu z Elomoto Sp. z o.o., w celu realizacji usług świadczonych drogą elektroniczną na podstawie art. 6 ust. 1 lit. b RODO (czynności niezbędne do wykonania umowy, której stroną jest osoba, której dane dotyczą, lub do podjęcia działań na żądanie osoby, której dane dotyczą, przed zawarciem umowy), dochodzenia możliwych roszczeń wobec Usługobiorcy na podstawie art. 6 ust. 1 lit. f RODO (realizacja prawnie uzasadnionych interesów realizowanych przez administratora) oraz, w razie wyrażenia dodatkowych zgód – na podstawie art. 6 ust. 1 lit. a RODO – w zakresie i w celach wskazanych w treści tych zgód.</li>
              <li>Pani/Pana dane osobowe mogą być ujawnione:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>podmiotom publicznym uprawnionym na podstawie odrębnych przepisów, na potrzeby prowadzonych przez nie postępowań,</li>
                  <li>innym zewnętrznym podmiotom wspierającym Elomoto Sp. z o.o. w zakresie usług realizowanych przez Elomoto Sp. z o.o. oraz informatycznych, księgowych lub współpracujących z Elomoto Sp. z o.o. w ramach kampanii marketingowych, przy czym takie podmioty będą przetwarzać dane na podstawie umowy z Elomoto Sp. z o.o. i wyłącznie zgodnie z jego poleceniami.</li>
                </ul>
              </li>
              <li>Pani/Pana dane osobowe nie będą przekazywane do państw trzecich lub organizacji międzynarodowych.</li>
              <li>Pani/Pana dane osobowe będą przetwarzane do czasu wykonania umowy, a także po jej zakończeniu w celach związanych z:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>dochodzeniem roszczeń w związku z wykonywaniem umowy (tj. co do zasady maksymalnie przez okres 10 lat od dnia zakończenia wykonania umowy),</li>
                  <li>wykonaniem obowiązków wynikających z przepisów prawa, w tym w szczególności podatkowych i rachunkowych,</li>
                  <li>dane dla celów marketingowych: w przypadku przetwarzania danych na podstawie zgody – do czasu trwania akcji marketingowych bądź do momentu wycofania zgody; w przypadku przetwarzania danych na podstawie prawnie uzasadnionego celu Elomoto Sp. z o.o. – do czasu trwania akcji marketingowych bądź do momentu wniesienia sprzeciwu,</li>
                  <li>w przypadku wyrażenia przez Panią/Pana zgody na przetwarzanie danych osobowych w innych celach, Pani/Pana dane osobowe będą przetwarzane do momentu wycofania przedmiotowej zgody.</li>
                </ul>
              </li>
              <li>Przysługuje Pani/Panu prawo dostępu do treści swoich danych oraz prawo ich sprostowania, usunięcia, ograniczenia przetwarzania, prawo do przenoszenia danych, prawo wniesienia sprzeciwu, a w razie wyrażenia dodatkowej zgody, prawo do cofnięcia zgody w dowolnym momencie bez wpływu na zgodność z prawem przetwarzania, którego dokonano na podstawie zgody przed jej cofnięciem.</li>
              <li>Jeśli uzna Pani/Pan, iż przetwarzanie danych osobowych Pani/Pana dotyczących narusza przepisy RODO, przysługuje Pani/Panu prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa.</li>
              <li>Podanie przez Panią/Pana danych osobowych jest warunkiem korzystania z usług świadczonych drogą elektroniczną przez Elomoto Sp. z o.o. W razie niepodania danych osobowych, Elomoto Sp. z o.o. nie będzie w stanie świadczyć wskazanych usług.</li>
              <li>Pani/Pana dane nie będą wykorzystywane do zautomatyzowanego podejmowania decyzji która opiera się wyłącznie na zautomatyzowanym przetwarzaniu, w tym profilowaniu, i wywołuje wobec Pani/Pana skutki prawne lub w podobny sposób istotnie na Panią/Pana wpływa.</li>
            </ul>
          </div>

          {/* Rozdział 5 */}
          <div className="space-y-4">
            <h2 className="text-lg font-black text-[#8ab925] uppercase tracking-widest">Rozdział 5. Minimalne wymagania techniczne</h2>
            <p className="text-gray-300 text-sm leading-relaxed">Wymagania techniczne niezbędne do korzystania ze strony internetowej Usługodawcy:</p>
            <ul className="list-disc pl-5 text-gray-300 text-sm space-y-2 leading-relaxed">
              <li>komputer, laptop lub inne urządzenie multimedialne z dostępem do Internetu z przeglądarką internetową wspierającą HTML 5;</li>
              <li>dostęp do poczty elektronicznej;</li>
              <li>włączenie w przeglądarce internetowej możliwości zapisu plików Cookies oraz obsługi Javascript.</li>
            </ul>
          </div>

          {/* Rozdział 6 */}
          <div className="space-y-4">
            <h2 className="text-lg font-black text-[#8ab925] uppercase tracking-widest">Rozdział 6. Szczególne zagrożenia związane z korzystaniem z usługi świadczonej drogą elektroniczną</h2>
            <ul className="list-disc pl-5 text-gray-300 text-sm space-y-3 leading-relaxed">
              <li>Korzystanie z usług świadczonych drogą elektroniczną wiąże się z wystąpieniem ryzyka zainfekowania systemu informatycznego przez niepożądane oprogramowanie, także takiego którego jedynym celem jest wyrządzanie szkód.</li>
              <li>W celu uniknięcia zagrożeń związanych z niechcianym zainfekowaniem systemu informatycznego rekomendowane jest zainstalowanie oprogramowania antywirusowego na komputerze z którego Usługobiorca korzysta. Zaleca się, aby program antywirusowy był stale aktualizowany, niezwłocznie po ukazaniu się aktualizacji możliwych do zainstalowania.</li>
              <li>Dodatkowo zaleca się, aby Usługobiorca miał uruchomioną na komputerze zaporę systemową.</li>
              <li>Poza zagrożeniami wynikającymi z zainfekowania systemu informatycznego, wśród możliwych zagrożeń znajdują się także ataki hackerów. Usługodawca oświadcza, iż stosuje zabezpieczenia mające na celu uniemożliwienie lub znaczne utrudnienie włamania się do systemu Usługodawcy.</li>
            </ul>
          </div>

          {/* Rozdział 7 */}
          <div className="space-y-4">
            <h2 className="text-lg font-black text-[#8ab925] uppercase tracking-widest">Rozdział 7. Postanowienia przejściowe i końcowe</h2>
            <ul className="list-disc pl-5 text-gray-300 text-sm space-y-3 leading-relaxed">
              <li>W sprawach nieuregulowanych niniejszym Regulaminem stosuje się przepisy powszechnie obowiązującego prawa.</li>
              <li>Usługodawca zastrzega sobie prawo do dokonywania zmian Regulaminu z ważnych przyczyn to jest: zmiany przepisów prawa w zakresie, w jakim te zmiany wpływają na realizację postanowień niniejszego Regulaminu.</li>
              <li>W przypadku zawarcia na podstawie niniejszego Regulaminu umów o charakterze ciągłym (np. świadczenie Usługi elektronicznej – „Formularz kontaktowy") zmieniony regulamin wiąże Usługobiorcę, jeżeli zostały zachowane wymagania określone w art. 384 oraz 384¹ Kodeksu cywilnego, to jest Usługobiorca został prawidłowo powiadomiony o zmianach i nie wypowiedział umowy w terminie 14 dni kalendarzowych od dnia powiadomienia. W wypadku gdyby zmiana Regulaminu skutkowała wprowadzeniem jakichkolwiek nowych opłat lub podwyższeniem obecnych Usługobiorca będący konsumentem ma prawo odstąpienia od umowy.</li>
              <li>W przypadku zawarcia na podstawie niniejszego Regulaminu umów o innym charakterze niż umowy ciągłe (np. „Formularz kontaktowy") zmiany Regulaminu nie będą w żaden sposób naruszały praw nabytych Usługobiorców będących konsumentami przed dniem wejścia w życie zmian Regulaminu, w szczególności zmiany Regulaminu nie będą miały wpływu na już składane lub złożone Zamówienia oraz zawarte, realizowane lub wykonane Umowy Sprzedaży.</li>
            </ul>
          </div>

          <p className="text-[10px] text-gray-300 uppercase tracking-widest pt-4 border-t border-white/10">
            Ostatnia aktualizacja: luty 2026
          </p>
        </section>
      </div>
    </div>
  );
};

