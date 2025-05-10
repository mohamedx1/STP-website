import React from 'react'
import MainHeading from '../../common/MainHeading'
import {Award, Compass} from 'lucide-react';

export default function AboutUS () {
    return (
        <div className='md:container px-5'>
            <section className='flex flex-col gap-12'>

                <div className='bg-gray-100 p-4 my-2 rounded-e-lg w-4/5 border-s-4 border-primary  '>
                    <MainHeading>
                        About Us
                    </MainHeading>
                    <div className='text-lg   flex flex-col gap-5'>
                        <p>
                            STP – Steps Towards Progress is a student activity in
                            its 20th year was derived to contribute to developing
                            our community by giving chance for youth to lead the
                            positive change.
                        </p>
                        <p>
                            Consequently, STP aims to fill the gap between the
                            education and employment phases by giving the
                            chance for youth to apply their innovation to organize
                            projects that play a role in our community.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    <div className="bg-gradient-to-br from-primary-300 to-primary p-8 rounded-xl shadow-sm border border-primary-200">
                        <div className="flex items-center mb-6">
                            <div className="bg-primary p-3 rounded-full mr-4">
                                <Compass className="h-6 w-6 text-white" />
                            </div>
                            <h2 className="text-3xl font-bold text-white">Our Vision</h2>
                        </div>
                        <div className="w-16 h-1 bg-white mb-6"></div>
                        <p className="text-white leading-relaxed text-lg">
                            Being a leading organization working on developing youth who will lead the positive change.
                        </p>
                    </div>
                    <div className="bg-gradient-to-br from-primary-300 to-primary p-8 rounded-xl shadow-sm border border-primary-200">
                        <div className="flex items-center mb-6">
                            <div className="bg-primary p-3 rounded-full mr-4">
                                <Award className="h-6 w-6 text-white" />
                            </div>
                            <h2 className="text-3xl font-bold text-white">Our Vision</h2>
                        </div>
                        <div className="w-16 h-1 bg-white mb-6"></div>
                        <p className="text-white leading-relaxed text-lg">
                            Is to develop youth in various fields personally & technically through academic programs, and events in a
                            values-oriented system, to take our part in providing a generation capable of playing its roles
                            effectively towards itself, community and country projects.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}
