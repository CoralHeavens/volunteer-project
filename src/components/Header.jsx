import React from "react";

const logo = 'Help Ulraine';
const headerButtonText = 'Допомогти'

const Header = () => {
    return (
        <header className='w-full flex justify-between border-b-[1px] border-[#1b1b1b] border-opacity-20 pb-4 mb-8'>
            <section>
                <div className='text-4xl'>
                    {logo}
                </div>
            </section>

            <section>
                <button>
                    {headerButtonText}
                </button>
            </section>
        </header>
    )
}

export default Header;